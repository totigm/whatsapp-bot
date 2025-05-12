import Bot from "@totigm/bot-builder";
import { WhatsappBotOptions } from "../types";
import makeWASocket, { DisconnectReason } from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
import { EventEmitter } from "events";

export default class WhatsappBot extends Bot {
    private socket: ReturnType<typeof makeWASocket>;

    constructor(options: WhatsappBotOptions) {
        const { state, saveCreds } = options.creds;
        const socket = makeWASocket({
            printQRInTerminal: true,
            auth: state,
        });

        const emitter = new EventEmitter();
        super(socket.ev as unknown as typeof emitter, {
            contentProp: "body",
            messageEvent: "message",
            ...options.bot,
        });

        socket.ev.on("creds.update", saveCreds);

        this.socket = socket;
    }

    protected auth() {
        this.client.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === "close") {
                const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
                console.log("connection closed due to ", lastDisconnect.error, ", reconnecting ", shouldReconnect);
                // reconnect if not logged out
                if (shouldReconnect) {
                    this.socket = makeWASocket({
                        printQRInTerminal: true,
                        auth: null,
                    });
                    this.auth();
                }
            } else if (connection === "open") {
                console.log("opened connection");
            }
        });

        this.client.on("messages.upsert", async (m) => {
            console.log(JSON.stringify(m, undefined, 2));

            console.log("replying to", m.messages[0].key.remoteJid);
            await this.socket.sendMessage(m.messages[0].key.remoteJid!, { text: "Hello there!" });
        });
    }
}
