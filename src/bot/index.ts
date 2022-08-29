import Bot from "@totigm/bot-builder";
import qrcode from "qrcode-terminal";
import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { WhatsappBotOptions } from "../types";
import fs from "fs";

export default class WhatsappBot extends Bot<Client, Message> {
    // Add auth options with clientId (see https://wwebjs.dev/guide/authentication.html#multiple-sessions)
    constructor(options: WhatsappBotOptions = {}) {
        const dockerOptions = {
            puppeteer: {
                executablePath: process.env.CHROME_BIN ?? "/usr/bin/chromium-browser",
                args: ["--no-sandbox"],
            },
        };

        const isDockerContainer = fs.existsSync("/.dockerenv");

        const clientOptions = {
            authStrategy: new LocalAuth(),
            ...(isDockerContainer ? dockerOptions : {}),
            ...options.client,
        };

        const client = new Client(clientOptions);
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
