import Bot from "@totigm/bot-builder";
import qrcode from "qrcode-terminal";
import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { WhatsappBotOptions } from "../types";

export default class WhatsappBot extends Bot<Client, Message> {
    // Add auth options with clientId (see https://wwebjs.dev/guide/authentication.html#multiple-sessions)
    constructor(options: WhatsappBotOptions = {}) {
        const client = new Client({
            authStrategy: new LocalAuth(),
            ...options.client,
        });
        super(client, {
            contentProp: "body",
            messageEvent: "message",
            ...options.bot,
        });
    }

    protected auth() {
        this.client.initialize();

        this.client.on("authenticated", () => {
            this.client.sendPresenceUnavailable();

            console.log("Authenticated");
        });

        this.client.on("auth_failure", (msg) => {
            console.error("Auth failed", msg);
        });

        this.client.on("qr", (qr) => {
            qrcode.generate(qr, { small: true });
        });
    }
}
