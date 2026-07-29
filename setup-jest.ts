/**
 * Jest per-suite bootstrap, wired in through `setupFilesAfterEnv` in jest.config.js. It loads Zone.js
 * plus its testing patches and initialises the Angular `TestBed` once per test file, so it has to run
 * before any spec code.
 *
 * The **zone** environment is deliberate — `jest-preset-angular` also ships a zoneless variant
 * (`jest-preset-angular/setup-env/zoneless`, `setupZonelessTestEnv()`), and it is not usable here.
 * keycloak-token-provider.spec.ts drives the provider through `TestBed` + `HttpTestingController`
 * while Jest's fake timers (`jest.useFakeTimers()` / `jest.advanceTimersByTime()`) fast-forward to the
 * proactive token refresh that `KeycloakTokenProvider` arms with `setTimeout`. Zone.js patches
 * `setTimeout` and the promise job queue, so firing the timer also drains the refresh's continuation
 * and the token swap is visible on the very next assertion. Without a zone the timer callback fires
 * but its async tail is still pending, and the assertions observe the stale token: swapping in
 * `setupZonelessTestEnv()` fails 7 of the 30 specs in that file (every refresh-scheduling case), each
 * reporting the pre-refresh token. Keep the zone variant unless those specs are rewritten to await
 * their own settlement.
 */
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();
