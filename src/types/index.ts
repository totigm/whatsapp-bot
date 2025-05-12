import { Options as BotBuilderOptions } from "@totigm/bot-builder";
import { AuthenticationState } from "@whiskeysockets/baileys";

export * from "@totigm/bot-builder";

type BotOptions = Omit<BotBuilderOptions, "contentProp" | "textFormatting" | "authData"> & {
    messageEvent?: "message" | "message_create";
};

export type WhatsappBotOptions = {
    bot?: BotOptions;
    creds: {
        state: AuthenticationState;
        saveCreds: () => Promise<void>;
    };
};
