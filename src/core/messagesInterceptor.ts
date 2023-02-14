import { IMessage } from "../interfaces/IMessage";
import { checkMessage } from "./checkMessage";

export async function messagesInterceptor(event: { message: IMessage }) {
  const text = event.message.message;
  await checkMessage(text, event.message);
}
