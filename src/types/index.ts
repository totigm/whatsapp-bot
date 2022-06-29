import { ClientOptions } from "whatsapp-web.js";
import { Options } from "@totigm/bot-builder";

export type WhatsappBotOptions = {
    clientOptions?: ClientOptions;
    botOptions?: Omit<Options, "contentProp" | "messageEvent" | "textFormatting">;
};
