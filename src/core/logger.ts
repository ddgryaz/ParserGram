import Pino from "pino";
import Pretty from "pino-pretty";

export const Logger = Pino(
  Pretty({
    colorize: true,
    translateTime: "SYS:standard",
  })
);
