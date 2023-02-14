import wordsTriggers from "../../wordsTriggers.json";
import { messageDeliverer } from "./messageDeliverer";
import { IMessage } from "../interfaces/IMessage";
import { Logger } from "./logger";

export async function checkMessage(text: string, message: IMessage) {
  if (!wordsTriggers.words) {
    throw new Error("trigger words not filled");
  }

  for (const word of wordsTriggers.words) {
    if (text.toLowerCase().includes(word)) {
      Logger.info(`Message intercepted! id: ${message.id}`);
      await messageDeliverer(message);
    }
  }
}
