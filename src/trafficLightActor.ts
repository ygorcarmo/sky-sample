import { skyConfig } from "./trafficLightActor.sky"
import { actorFromStately } from "@statelyai/sky"

const actor = await actorFromStately(
  {
    apiKey: "key",
    url: "url",
    sessionId: "this-is-the-id",
  },
  skyConfig
)

export default actor
