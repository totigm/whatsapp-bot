<h1 align="center">Welcome to <b>@totigm/whatsapp-bot</b> 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/@totigm/whatsapp-bot" target="_blank">
    <img alt="NPM version" src="https://img.shields.io/npm/v/@totigm/whatsapp-bot">
  </a>
  <a href="https://github.com/totigm/whatsapp-bot" target="_blank">
    <img alt="GitHub repo" src="https://img.shields.io/badge/GitHub-%40totigm%2Fbot--builder%20-green">
  </a>
  <a href="https://www.npmjs.com/package/@totigm/whatsapp-bot" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/@totigm/whatsapp-bot" />
  </a>
  <a href="https://github.com/totigm/whatsapp-bot/stargazers" target="_blank">
    <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/totigm/whatsapp-bot?style=flat">
  </a>
  <a href="https://github.com/totigm/whatsapp-bot#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen" />
  </a>
  <a href="https://github.com/totigm/whatsapp-bot/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/totigm/whatsapp-bot" />
  </a>
</p>

## 📄 Introduction

This is a library to create WhatsApp bots. It is a WhatsApp implementation of the [@totigm/bot-builder](https://www.npmjs.com/package/@totigm/bot-builder) package, which handles all the commands stuff behind the scenes, so you can focus on your bot's logic.

## 🔗 Quick links

- [Reference documentation](./docs/reference.md)
- [Bot options](./docs/bot-options.md)
- [Bot builder](https://www.npmjs.com/package/@totigm/bot-builder)
- [Discord bot](https://www.npmjs.com/package/@totigm/discord-bot)
- [GitHub](https://github.com/totigm/whatsapp-bot#readme)
- [NPM](https://www.npmjs.com/package/@totigm/whatsapp-bot)

## 💻 Installation

```sh
npm i @totigm/whatsapp-bot
```

or

```sh
yarn add @totigm/whatsapp-bot
```

## 🚀 Getting started

Start adding commands to your bot by checking the [reference documentation](./docs/reference.md).

## 🤖 Example usage

```ts
import WhatsappBot from "@totigm/whatsapp-bot";

const bot = new WhatsappBot();

bot.addCommand(
    "hi",
    async (message, client) => {
        const chatId = message.from;
        const contact = await client.getContactById(chatId);

        return `Hello ${contact.pushname}!`;
    },
    {
        description: "Say hi",
        explanation: "The bot will say hi to you using your WhatsApp's name",
        example: {
            output: "Hi Toti! How are you doing?",
        },
    },
);
```

## ⚙️ Options

When you create a bot, you can pass an options object to customize it. Check its [options](./docs/options.md) documentation for more information.

```ts
const options = { ... };

const bot = new WhatsappBot(options);
```

## 👤 Author

<a href="https://github.com/totigm" target="_blank">
  <img alt="GitHub: totigm" src="https://img.shields.io/github/followers/totigm?label=Follow @totigm&style=social">
</a>
<br>
<a href="https://twitter.com/totigm8" target="_blank">
  <img alt="Twitter: totigm8" src="https://img.shields.io/twitter/follow/totigm8?style=social" />
</a>
<br>
<a href="https://linkedin.com/in/totigm" target="_blank">
  <img alt="LinkedIn: totigm" src="https://img.shields.io/badge/LinkedIn-%40totigm-green?style=social&logo=linkedin" />
</a>
<br>
<a href="https://www.npmjs.com/~totigm" target="_blank">
  <img alt="NPM: totigm" src="https://img.shields.io/badge/NPM-%40totigm-green?style=social&logo=npm" />
</a>

## 🤝 Contributing

Contributions are more than welcome!

We think that you might have great ideas to make this project even better. If you do, please create a pull request and/or issue following the [contribution guidelines](./docs/CONTRIBUTING.md).

## ⭐️ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Toti Muñoz](https://github.com/totigm).<br />
This project is [MIT](https://github.com/totigm/bot-builder/blob/master/LICENSE) licensed.

---

This project was made with ❤ and TypeScript
