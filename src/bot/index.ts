import { Client, LocalAuth, Message, ClientOptions } from "whatsapp-web.js";
import { Bot, Options } from "@totigm/bot-builder";
import qrcode from "qrcode-terminal";

type WhatsappBotOptions = {
    clientOptions?: ClientOptions;
    botOptions?: Omit<Options, "contentProp" | "messageEvent" | "textFormatting">;
};

export default class WhatsappBot extends Bot<Client, Message> {
    constructor({ clientOptions, botOptions }: WhatsappBotOptions = {}) {
        const client = new Client({
            authStrategy: new LocalAuth(),
            ...clientOptions,
        });
        super(client, {
            ...botOptions,
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

        this.client.initialize().then(() => this.client.sendPresenceUnavailable());
    }
}
