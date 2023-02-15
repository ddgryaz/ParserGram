import { readLine } from "./core/readLine";
import { Logger } from "./core/logger";
import { NewMessage } from "telegram/events";
import { messagesInterceptor } from "./core/messagesInterceptor";
import { client } from "./client";
import { PHONE_NUMBER, CHANNEL_ID } from "./config";
import { debugMode } from "./core/debugMode";

(async () => {
  await client.start({
    phoneNumber: PHONE_NUMBER,
    phoneCode: async () => await readLine("Confirmation code ?"),
    onError: (err) => Logger.error(err),
  });

  await client.connect();

  if (debugMode()) {
    Logger.warn(`token session: ${client.session.save()}`);
  }

  client.addEventHandler(
    messagesInterceptor,
    new NewMessage({ chats: [CHANNEL_ID] })
  );
})();
