import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { Bot, DeepPartial, Options } from "@totigm/bot-builder";
import qrcode from "qrcode-terminal";

export type WhatsappBotOptions = Omit<Options, "textFormatting" | "contentProp">;

export class WhatsappBot extends Bot<Client, Message> {
    constructor(options?: DeepPartial<WhatsappBotOptions>) {
        const client = new Client({
            authStrategy: new LocalAuth(),
        });
        super(client, {
            ...options,
            contentProp: "body",
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
