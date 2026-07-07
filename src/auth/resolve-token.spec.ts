import { firstValueFrom, Observable, of, Subject, Subscription, throwError } from "rxjs";
import {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";

/** A representative JWT-shaped access token used across the token-resolution tests. */
const TOKEN: string = "eyJhbGciOi.payload.signature";

/**
 * Unit tests for the exported header constants: their exact values are part of
 * the wire contract (canonical `Authorization` header name, standard `Bearer `
 * scheme), so they are pinned here rather than left to drift.
 */
describe("constants", () => {
  /** The header name is the canonical `Authorization` form. */
  it("uses the canonical Authorization header name", (): void => {
    expect(AUTHORIZATION_HEADER).toBe("Authorization");
  });

  /** The credential scheme prefix is the standard `Bearer ` (note trailing space). */
  it("uses the standard bearer scheme prefix", (): void => {
    expect(BEARER_PREFIX).toBe("Bearer ");
  });
});

/**
 * Unit tests for {@link resolveToken}: it must normalize every shape a
 * `TokenProvider` may return (`string` / `null` / `Promise` / `Observable`) into
 * a single-emission `Observable<string | null>`, collapse all "no usable token"
 * values to `null`, trim real tokens, propagate source errors, and tear down its
 * upstream subscription on unsubscribe.
 */
describe("resolveToken", () => {
  /** A ready synchronous string token is emitted unchanged. */
  it("resolves a synchronous string token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(TOKEN))).resolves.toBe(TOKEN);
  });

  /** A `null` input means "unauthenticated" and is emitted as `null`. */
  it("resolves null when the token is null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(null))).resolves.toBeNull();
  });

  /** An empty-string token carries no credential and collapses to `null`. */
  it("collapses an empty-string token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(""))).resolves.toBeNull();
  });

  /** A whitespace-only token carries no credential and collapses to `null`. */
  it("collapses a whitespace-only token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken("   "))).resolves.toBeNull();
  });

  /** A source emitting `undefined` (off-type at runtime) is treated as "no token". */
  it("collapses an undefined emission from a misbehaving source to null", async (): Promise<void> => {
    // A `TokenResult` source can emit `undefined` at runtime even though the
    // type says `string | null`; it must be treated as "no token", not crash.
    const source: Observable<string | null> = of(undefined as unknown as string | null);
    await expect(firstValueFrom(resolveToken(source))).resolves.toBeNull();
  });

  /** Surrounding whitespace is trimmed from an otherwise-valid token. */
  it("trims surrounding whitespace from a real token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(`  ${TOKEN}  `))).resolves.toBe(TOKEN);
  });

  /** A `Promise`-based source is awaited and its token emitted. */
  it("resolves a Promise-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A `Promise` resolving to `null` is emitted as `null`. */
  it("resolves a Promise that resolves to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(null)))).resolves.toBeNull();
  });

  /** An `Observable`-based source is subscribed to and its token emitted. */
  it("resolves an Observable-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(of(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A rejected `Promise` source surfaces as an error, not a silent `null`. */
  it("propagates an error from a Promise token source", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    await expect(firstValueFrom(resolveToken(Promise.reject(boom)))).rejects.toBe(boom);
  });

  /** An erroring `Observable` source surfaces as an error, not a silent `null`. */
  it("propagates an error from an Observable token source", async (): Promise<void> => {
    const boom: Error = new Error("token stream failed");
    await expect(firstValueFrom(resolveToken(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing from the result unsubscribes from the upstream source. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveToken(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });
});

/**
 * Unit tests for {@link buildBearerValue}: it prefixes a real token with the
 * bearer scheme and maps the "no token" `null` straight through to `null` so the
 * interceptors never emit an empty `Bearer` header.
 */
describe("buildBearerValue", () => {
  /** A real token is prefixed with the `Bearer ` scheme. */
  it("prefixes a real token with the bearer scheme", (): void => {
    expect(buildBearerValue(TOKEN)).toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields a `null` header value (no `Bearer ` prefix). */
  it("returns null for a null token", (): void => {
    expect(buildBearerValue(null)).toBeNull();
  });
});

/**
 * Unit tests for {@link resolveBearerValue}: it composes {@link resolveToken}
 * with {@link buildBearerValue}, emitting a ready `Authorization` header value or
 * `null`, propagating source errors, and tearing down its upstream subscription.
 */
describe("resolveBearerValue", () => {
  /** A present token yields the full `Bearer <token>` header value. */
  it("emits the bearer header value for a present token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(TOKEN))).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** An absent token yields `null` so the interceptor sends the request unchanged. */
  it("emits null when no token is available", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(null))).resolves.toBeNull();
  });

  /** An empty token yields `null` (never an empty `Bearer ` header). */
  it("emits null for an empty token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(""))).resolves.toBeNull();
  });

  /** A source error propagates through the bearer-value wrapper. */
  it("propagates an error from the token source", async (): Promise<void> => {
    const boom: Error = new Error("nope");
    await expect(firstValueFrom(resolveBearerValue(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing from the result unsubscribes from the upstream source. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveBearerValue(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });

  /** A token pushed asynchronously through an `Observable` is wrapped and emitted. */
  it("emits the bearer value for a token pushed through an Observable source", async (): Promise<void> => {
    const source: Subject<string | null> = new Subject<string | null>();
    const promise: Promise<string | null> = firstValueFrom(resolveBearerValue(source));
    source.next(TOKEN);
    source.complete();
    await expect(promise).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });
});
