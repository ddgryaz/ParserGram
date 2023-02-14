import { Api } from "telegram";
import { client } from "../client";
import { IMessage } from "../interfaces/IMessage";
import { CHANNEL_ID, ADDRESSEE } from "../config";
import { Logger } from "./logger";

export async function messageDeliverer(message: IMessage) {
  await client.invoke(
    new Api.messages.ForwardMessages({
      fromPeer: CHANNEL_ID,
      id: [message.id],
      toPeer: ADDRESSEE,
      dropAuthor: false,
      dropMediaCaptions: false,
    })
  );

  Logger.info(`Message forwarded to user - ${ADDRESSEE}`);
}
