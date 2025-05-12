import WhatsappBot from "./bot";
import { useMultiFileAuthState } from "@whiskeysockets/baileys";

async function main() {
    const creds = await useMultiFileAuthState("auth_info_baileys");

    new WhatsappBot({
        creds,
    });
}

main();
