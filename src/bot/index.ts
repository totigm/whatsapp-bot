import Bot from "@totigm/bot-builder";
import qrcode from "qrcode-terminal";
import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { WhatsappBotOptions } from "../types";

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

        this.client.initialize();

        this.client.on("ready", () => {
            this.client.sendPresenceUnavailable()
        })
    }
}
