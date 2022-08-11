import { ClientOptions } from "whatsapp-web.js";
import { Options as BotBuilderOptions } from "@totigm/bot-builder";

type BotOptions = Omit<BotBuilderOptions, "contentProp" | "textFormatting"> & {
    messageEvent?: "message" | "message_create";
};

export type WhatsappBotOptions = {
    client?: ClientOptions;
    bot?: BotOptions;
};
