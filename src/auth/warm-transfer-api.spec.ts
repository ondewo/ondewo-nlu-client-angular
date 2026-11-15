import { Agent, WarmTransferAgentLexicon, WarmTransferAgentSettings, WarmTransferAgentTexts } from "../../api/ondewo/nlu/agent.pb";
import {
  GetWarmTransferIntroOutcomeRequest,
  PrepareWarmTransferIntroRequest,
  PrepareWarmTransferIntroResponse,
  WarmTransferIntroConfig,
  WarmTransferIntroDecidedBy,
  WarmTransferIntroDecision,
  WarmTransferIntroOutcome,
  WarmTransferIntroStage,
  WarmTransferIntroTextSource
} from "../../api/ondewo/nlu/session.pb";
import { SessionsClient } from "../../api/ondewo/nlu/session.pbsc";

/**
 * Guards on the nlu-api 7.6.0 warm transfer intro surface (OND236-120) as the generated stubs expose it.
 * ondewo-aim edits `Agent.warmTransferSettings`, whose `enabled` and `declineReasonQuestion` are proto3
 * `optional`: an explicit `false` / `""` means something different from "unset" (the next configuration
 * level decides), so the serialised bytes must keep that difference.
 */
describe("warm transfer intro API", (): void => {
  it("exposes both Sessions RPCs on the client", (): void => {
    expect(typeof SessionsClient.prototype.prepareWarmTransferIntro).toBe("function");
    expect(typeof SessionsClient.prototype.getWarmTransferIntroOutcome).toBe("function");
  });

  it("round-trips a PrepareWarmTransferIntroRequest", (): void => {
    const request: PrepareWarmTransferIntroRequest = new PrepareWarmTransferIntroRequest({
      introSession: "projects/p/agent/sessions/intro",
      sourceSession: "projects/p/agent/sessions/source",
      config: new WarmTransferIntroConfig({
        textSource: WarmTransferIntroTextSource.WARM_TRANSFER_INTRO_TEXT_SOURCE_LLM_SUMMARY,
        decisionTimeoutS: 20,
        projectDisplayName: "Demo"
      }),
      languageCode: "de",
      transferRequestId: "t-1"
    });
    const decoded: PrepareWarmTransferIntroRequest = PrepareWarmTransferIntroRequest.deserializeBinary(
      request.serializeBinary()
    );
    expect(decoded.toObject()).toEqual(request.toObject());
  });

  it("round-trips the response, the outcome request and the outcome", (): void => {
    const response: PrepareWarmTransferIntroResponse = new PrepareWarmTransferIntroResponse({
      textSourceUsed: WarmTransferIntroTextSource.WARM_TRANSFER_INTRO_TEXT_SOURCE_TEMPLATE,
      textFellBack: true,
      introTextChars: 42,
      promptDigest: "abc"
    });
    expect(PrepareWarmTransferIntroResponse.deserializeBinary(response.serializeBinary()).toObject()).toEqual(
      response.toObject()
    );
    const outcomeRequest: GetWarmTransferIntroOutcomeRequest = new GetWarmTransferIntroOutcomeRequest({
      introSession: "projects/p/agent/sessions/intro"
    });
    expect(GetWarmTransferIntroOutcomeRequest.deserializeBinary(outcomeRequest.serializeBinary()).introSession).toBe(
      "projects/p/agent/sessions/intro"
    );
    const outcome: WarmTransferIntroOutcome = new WarmTransferIntroOutcome({
      decision: WarmTransferIntroDecision.WARM_TRANSFER_INTRO_DECISION_DECLINED,
      decidedBy: WarmTransferIntroDecidedBy.WARM_TRANSFER_INTRO_DECIDED_BY_SPEECH,
      declineReasonPresent: true,
      stage: WarmTransferIntroStage.WARM_TRANSFER_INTRO_STAGE_CLOSED,
      cause: "callee-declined"
    });
    expect(WarmTransferIntroOutcome.deserializeBinary(outcome.serializeBinary()).toObject()).toEqual(
      outcome.toObject()
    );
  });

  it("numbers the enum values as the proto does", (): void => {
    expect(WarmTransferIntroDecision.WARM_TRANSFER_INTRO_DECISION_NO_DECISION).toBe(4);
    expect(WarmTransferIntroDecidedBy.WARM_TRANSFER_INTRO_DECIDED_BY_TIMEOUT).toBe(3);
    expect(WarmTransferIntroStage.WARM_TRANSFER_INTRO_STAGE_CLOSED).toBe(5);
    expect(WarmTransferIntroTextSource.WARM_TRANSFER_INTRO_TEXT_SOURCE_LLM_SUMMARY).toBe(2);
  });

  it("keeps an explicit false or empty optional apart from an unset one", (): void => {
    expect(new WarmTransferIntroConfig().serializeBinary().length).toBe(0);
    const explicit: WarmTransferIntroConfig = WarmTransferIntroConfig.deserializeBinary(
      new WarmTransferIntroConfig({ confirmHumanBeforeIntro: false, declineReasonQuestion: "" }).serializeBinary()
    );
    expect(explicit.confirmHumanBeforeIntro).toBe(false);
    expect(explicit.declineReasonQuestion).toBe("");
    const unset: WarmTransferIntroConfig = WarmTransferIntroConfig.deserializeBinary(
      new WarmTransferIntroConfig().serializeBinary()
    );
    expect(unset.confirmHumanBeforeIntro).toBeUndefined();
    expect(unset.declineReasonQuestion).toBeUndefined();
  });

  it("carries the agent's warm transfer settings through an Agent", (): void => {
    const agent: Agent = new Agent({
      displayName: "Demo",
      warmTransferSettings: new WarmTransferAgentSettings({
        enabled: false,
        llmCcaiServiceName: "llm",
        defaultTexts: {
          de: new WarmTransferAgentTexts({ readyQuestion: "Sind Sie bereit?", declineReasonQuestion: "" })
        },
        extraLexicon: { de: new WarmTransferAgentLexicon({ acceptPhrases: ["passt"], declinePhrases: ["nein danke"] }) }
      })
    });
    const settings: WarmTransferAgentSettings | undefined = Agent.deserializeBinary(agent.serializeBinary())
      .warmTransferSettings;
    expect(settings?.enabled).toBe(false);
    expect(settings?.llmCcaiServiceName).toBe("llm");
    expect(settings?.defaultTexts?.["de"]?.readyQuestion).toBe("Sind Sie bereit?");
    expect(settings?.defaultTexts?.["de"]?.declineReasonQuestion).toBe("");
    expect(settings?.extraLexicon?.["de"]?.acceptPhrases).toEqual(["passt"]);
    expect(settings?.extraLexicon?.["de"]?.declinePhrases).toEqual(["nein danke"]);
  });
});
