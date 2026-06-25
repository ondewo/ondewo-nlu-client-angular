import { GrpcEvent, GrpcMessage, GrpcRequest } from "@ngx-grpc/common";
import { GrpcHandler } from "@ngx-grpc/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TokenProvider, TokenResult } from "./token-provider";

/** A representative JWT-shaped access token used across the gRPC-interceptor tests. */
const TOKEN: string = "header.payload.signature";

/** The expected `Authorization` metadata value for {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;

/**
 * A `TokenProvider` test double whose `getToken` returns a caller-supplied value
 * (string / `null` / `Promise` / `Observable`), letting each test drive the
 * interceptor through a single token shape.
 */
class StubTokenProvider implements TokenProvider {
  /**
   * @param value the fixed `TokenResult` every `getToken` call returns.
   */
  constructor(private readonly value: TokenResult) {}

  /**
   * @returns the caller-supplied {@link TokenResult}.
   */
  public getToken(): TokenResult {
    return this.value;
  }
}

/**
 * Minimal stand-in for `@ngx-grpc`'s `GrpcMetadata`, backing the `set`/`has`/`get`
 * surface the interceptor uses with a plain `Map` so tests need no real gRPC-web
 * transport.
 */
class FakeMetadata {
  private readonly map: Map<string, string> = new Map<string, string>();

  /**
   * @param initial optional seed entries to pre-populate the metadata map with.
   */
  constructor(initial?: Record<string, string>) {
    if (initial !== undefined) {
      for (const key of Object.keys(initial)) {
        this.map.set(key, initial[key]);
      }
    }
  }

  /**
   * Set a metadata entry, overwriting any existing value.
   *
   * @param name the metadata key.
   * @param value the metadata value.
   */
  public set(name: string, value: string): void {
    this.map.set(name, value);
  }

  /**
   * @param name the metadata key to probe.
   * @returns `true` when an entry exists for `name`.
   */
  public has(name: string): boolean {
    return this.map.has(name);
  }

  /**
   * @param name the metadata key to read.
   * @returns the stored value, or `undefined` when absent.
   */
  public get(name: string): string | undefined {
    return this.map.get(name);
  }
}

/** A unique downstream event the fake `next` handler emits, identity-checked in tests. */
const SENTINEL: GrpcEvent<GrpcMessage> = { sentinel: true } as unknown as GrpcEvent<GrpcMessage>;

/** The captured result of running a request through the interceptor under test. */
interface RunResult {
  /** The request metadata the interceptor may have mutated. */
  metadata: FakeMetadata;
  /** The gRPC event stream returned by the interceptor. */
  events: Observable<GrpcEvent<GrpcMessage>>;
  /** Accessor for the request the `next` handler actually received (throws if `next` was never called). */
  handled: () => GrpcRequest<GrpcMessage, GrpcMessage>;
}

/**
 * Build a request carrying the given metadata, run it through the interceptor
 * with a `next` handler that records the request it received and emits a
 * sentinel event.
 *
 * @param tokenResult the value the stub `TokenProvider` returns.
 * @param metadata the request metadata to attach (and assert on afterwards).
 * @returns the metadata, the event stream, and an accessor for the handled request.
 */
function run(tokenResult: TokenResult, metadata: FakeMetadata): RunResult {
  const interceptor: AuthGrpcInterceptor = new AuthGrpcInterceptor(new StubTokenProvider(tokenResult));
  const request: GrpcRequest<GrpcMessage, GrpcMessage> = {
    requestMetadata: metadata
  } as unknown as GrpcRequest<GrpcMessage, GrpcMessage>;

  let handledRequest: GrpcRequest<GrpcMessage, GrpcMessage> | undefined;
  const next: GrpcHandler = {
    handle: (req: GrpcRequest<GrpcMessage, GrpcMessage>): Observable<GrpcEvent<GrpcMessage>> => {
      handledRequest = req;
      return of(SENTINEL);
    }
  } as unknown as GrpcHandler;

  const events: Observable<GrpcEvent<GrpcMessage>> = interceptor.intercept(request, next);
  return {
    metadata,
    events,
    handled: (): GrpcRequest<GrpcMessage, GrpcMessage> => {
      if (handledRequest === undefined) {
        throw new Error("next handler was not invoked");
      }
      return handledRequest;
    }
  };
}

/**
 * Unit tests for {@link AuthGrpcInterceptor}: it must attach the bearer
 * credential to the request metadata for every token shape, leave the metadata
 * untouched when there is no usable token, respect an explicitly-preset
 * `authorization` entry (without even calling the provider), delegate to the
 * next handler, and propagate token-source errors instead of sending an
 * unauthenticated request.
 */
describe("AuthGrpcInterceptor", () => {
  /** A synchronous token is set as the bearer metadata entry. */
  it("sets the bearer metadata when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** The interceptor forwards the downstream event emitted by `next`. */
  it("emits the downstream event from the next handler", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, new FakeMetadata());
    await expect(firstValueFrom(result.events)).resolves.toBe(SENTINEL);
  });

  /** A `null` token leaves the metadata free of any `authorization` entry. */
  it("leaves metadata untouched when the token is null", async (): Promise<void> => {
    const result: RunResult = run(null, new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token leaves the metadata free of any `authorization` entry. */
  it("leaves metadata untouched when the token is an empty string", async (): Promise<void> => {
    const result: RunResult = run("", new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise`-based token is resolved before the request is delegated. */
  it("resolves a Promise-based token before delegating", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable`-based token is resolved before the request is delegated. */
  it("resolves an Observable-based token before delegating", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An explicitly-set `authorization` entry wins; the provider is never consulted. */
  it("leaves an existing authorization entry untouched and skips the token provider", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const provider: StubTokenProvider = new StubTokenProvider(TOKEN);
    const getTokenSpy: jest.SpyInstance<TokenResult, []> = jest.spyOn(provider, "getToken");
    const interceptor: AuthGrpcInterceptor = new AuthGrpcInterceptor(provider);
    const metadata: FakeMetadata = new FakeMetadata({ [AUTHORIZATION_HEADER]: preset });
    const request: GrpcRequest<GrpcMessage, GrpcMessage> = {
      requestMetadata: metadata
    } as unknown as GrpcRequest<GrpcMessage, GrpcMessage>;
    const next: GrpcHandler = {
      handle: (): Observable<GrpcEvent<GrpcMessage>> => of(SENTINEL)
    } as unknown as GrpcHandler;

    await firstValueFrom(interceptor.intercept(request, next));

    expect(metadata.get(AUTHORIZATION_HEADER)).toBe(preset);
    expect(getTokenSpy).not.toHaveBeenCalled();
  });

  /** A token-source error propagates and the request is never delegated. */
  it("propagates an error raised by the token source without delegating", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError(() => boom), new FakeMetadata());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});
