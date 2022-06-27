import { Client, LocalAuth, Message, ClientOptions } from "whatsapp-web.js";
import { Bot, DeepPartial, Options } from "@totigm/bot-builder";
import qrcode from "qrcode-terminal";

export type WhatsappBotOptions = Omit<Options, "contentProp" | "messageEvent" | "textFormatting">;

export class WhatsappBot extends Bot<Client, Message> {
    constructor(options?: DeepPartial<WhatsappBotOptions>, clientOptions?: ClientOptions) {
        const client = new Client({
            authStrategy: new LocalAuth(),
            ...clientOptions,
        });
        super(client, {
            ...options,
            contentProp: "body",
            messageEvent: "message",
            textFormatting: {
                bold: "*",
                italic: "_",
                underline: "",
                strikethrough: "~",
            },
        });
    }

    protected auth() {
        this.client.on("authenticated", () => {
            console.log("Authenticated");
        });

        this.client.on("auth_failure", (msg) => {
            console.error("Auth failed", msg);
        });

        this.client.on("qr", (qr) => {
            qrcode.generate(qr, { small: true });
        });

        this.client.initialize();
    }
}
