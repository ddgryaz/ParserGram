import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { IAPISettings } from "./interfaces/IAPISettings";
import * as dotenv from "dotenv";
import { debugMode } from "./core/debugMode";
import { Logger } from "./core/logger";

dotenv.config();

let stringSession: StringSession;

if (debugMode()) {
  Logger.warn("-- DEBUG MODE: TRUE. Search for an active session --");
  stringSession = new StringSession(process.env.SESSION || "");
} else {
  stringSession = new StringSession("");
}

const APISettings: IAPISettings = {
  apiId: Number(process.env.API_ID),
  apiHash: process.env.API_HASH || "",
};

class Client extends TelegramClient {
  constructor(apiId: number, apiHash: string) {
    super(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    });

    this.apiId = apiId;
    this.apiHash = apiHash;
  }
}

export const client = new Client(APISettings.apiId, APISettings.apiHash);
