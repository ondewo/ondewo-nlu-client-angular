import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injector, runInInjectionContext } from "@angular/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { authHttpInterceptor } from "./auth-http.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A representative JWT-shaped access token used across the HTTP-interceptor tests. */
const TOKEN: string = "header.payload.signature";

/** The expected `Authorization` header value for {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;

/** A representative request URL pointing at a gRPC-web-over-HTTP NLU endpoint. */
const URL: string = "https://api.example.com/ondewo.nlu.Agents/ListAgents";

/**
 * A `TokenProvider` test double whose `getToken` returns a caller-supplied value
 * (string / `null` / `Promise` / `Observable`), letting each test drive the
 * interceptor through a single token shape.
 */
class StubTokenProvider implements TokenProvider {
  /**
   * Create a stub that hands out the same `TokenResult` on every call.
   *
   * @param value the fixed `TokenResult` every `getToken` call returns.
   */
  public constructor(private readonly value: TokenResult) {}

  /**
   * @returns the caller-supplied {@link TokenResult}.
   */
  public getToken(): TokenResult {
    return this.value;
  }
}

/** The captured result of running a request through the interceptor under test. */
interface RunResult {
  /** Accessor for the request the `next` handler received (throws if `next` was never called). */
  forwarded: HttpRequest<unknown>;
  /** The HTTP event stream returned by the interceptor. */
  events: Observable<HttpEvent<unknown>>;
}

/**
 * Drive `authHttpInterceptor` inside an injection context that provides the
 * given `TokenProvider`, capturing the request actually handed to the next
 * handler. The fake `next` echoes a sentinel data event so the stream is
 * observable end-to-end.
 *
 * @param tokenResult the value the stub `TokenProvider` returns.
 * @param request the outgoing request to run through the interceptor.
 * @returns the forwarded-request accessor and the resulting event stream.
 */
function run(tokenResult: TokenResult, request: HttpRequest<unknown>): RunResult {
  const injector: Injector = Injector.create({
    providers: [{ provide: TOKEN_PROVIDER, useValue: new StubTokenProvider(tokenResult) }]
  });

  let forwarded: HttpRequest<unknown> | undefined;
  const next: HttpHandlerFn = (req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> => {
    forwarded = req;
    return of({ type: 0 } as HttpEvent<unknown>);
  };

  const events: Observable<HttpEvent<unknown>> = runInInjectionContext(
    injector,
    (): Observable<HttpEvent<unknown>> => authHttpInterceptor(request, next)
  );
  // `forwarded` is assigned synchronously only for the sync-token paths; the
  // caller awaits `events` before reading it for async paths.
  return {
    /**
     * @returns the request the fake `next` handler received.
     * @throws Error when `next` was never invoked — a test asserting on the
     *   forwarded request would otherwise silently read `undefined` and pass.
     */
    get forwarded(): HttpRequest<unknown> {
      if (forwarded === undefined) {
        throw new Error("next handler was not invoked");
      }
      return forwarded;
    },
    events
  };
}

/**
 * Build a bare `GET` request to {@link URL}, optionally seeding it with headers.
 *
 * @param headers optional headers to attach to the request.
 * @returns a new `HttpRequest` for the interceptor to process.
 */
function newRequest(headers?: HttpHeaders): HttpRequest<unknown> {
  if (headers === undefined) {
    return new HttpRequest("GET", URL);
  }
  return new HttpRequest("GET", URL, { headers });
}

/**
 * Unit tests for the functional `authHttpInterceptor`: it must attach the bearer
 * header for every token shape via a request clone, forward the original request
 * untouched (no clone) when there is no usable token, respect an explicitly-set
 * `Authorization` header, and propagate token-source errors instead of sending an
 * unauthenticated request.
 */
describe("authHttpInterceptor", (): void => {
  /** A synchronous token is attached as the bearer header on the forwarded request. */
  it("attaches the bearer header when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** A `null` token forwards the exact same request instance, header-free. */
  it("forwards the original request untouched when the token is null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(null, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token forwards the exact same request instance, header-free. */
  it("forwards untouched when the token is an empty string", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run("", request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise`-based token is resolved before the request is sent. */
  it("resolves a Promise-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable`-based token is resolved before the request is sent. */
  it("resolves an Observable-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** A token source resolving to `null` forwards the original request without cloning. */
  it("does not clone the request when the token source resolves to null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(Promise.resolve(null), request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
  });

  /** An explicitly-set `Authorization` header wins and the request is forwarded as-is. */
  it("leaves an explicitly-set Authorization header untouched", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const request: HttpRequest<unknown> = newRequest(new HttpHeaders({ [AUTHORIZATION_HEADER]: preset }));
    const result: RunResult = run(TOKEN, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(preset);
  });

  /**
   * A lowercase `authorization` header set by the caller also wins, and the
   * provider is never consulted.
   *
   * This pins Angular's case-insensitive `HttpHeaders` lookup, which deliberately
   * DIFFERS from the gRPC interceptor: `GrpcMetadata` keys are matched
   * case-sensitively there, so a lowercase entry does NOT short-circuit it.
   * Asserting the HTTP behaviour here means a future attempt to "unify" the two
   * interceptors cannot silently break one of them.
   */
  it("honours a lowercase authorization header and skips the token provider", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const provider: StubTokenProvider = new StubTokenProvider(TOKEN);
    const getTokenSpy: jest.SpyInstance<TokenResult, []> = jest.spyOn(provider, "getToken");
    const injector: Injector = Injector.create({
      providers: [{ provide: TOKEN_PROVIDER, useValue: provider }]
    });
    const request: HttpRequest<unknown> = newRequest(new HttpHeaders({ authorization: preset }));

    let forwarded: HttpRequest<unknown> | undefined;
    const next: HttpHandlerFn = (req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> => {
      forwarded = req;
      return of({ type: 0 } as HttpEvent<unknown>);
    };

    await firstValueFrom(
      runInInjectionContext(injector, (): Observable<HttpEvent<unknown>> => authHttpInterceptor(request, next))
    );

    expect(forwarded).toBe(request);
    expect(getTokenSpy).not.toHaveBeenCalled();
  });

  /** A token-source error propagates and the request is never sent. */
  it("propagates an error raised by the token source without sending the request", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError((): Error => boom), newRequest());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});
