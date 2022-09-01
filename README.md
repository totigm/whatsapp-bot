<h1 align="center">Welcome to <b>@totigm/whatsapp-bot</b> 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/@totigm/whatsapp-bot" target="_blank">
    <img alt="NPM version" src="https://img.shields.io/npm/v/@totigm/whatsapp-bot">
  </a>
  <a href="https://github.com/totigm/whatsapp-bot" target="_blank">
    <img alt="GitHub repo" src="https://img.shields.io/badge/GitHub-@totigm/whatsapp--bot-green?style=flat&logo=github">
  </a>
  <a href="https://www.npmjs.com/package/@totigm/whatsapp-bot" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/@totigm/whatsapp-bot" />
  </a>
  <a href="https://github.com/totigm/whatsapp-bot/actions/workflows/main.yml" target="_blank">
    <img alt="CI" src="https://github.com/totigm/whatsapp-bot/actions/workflows/main.yml/badge.svg" />
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

> The [whatsapp-web.js](https://wwebjs.dev) library is used for this implementation.

## 🔗 Quick links

- [Reference documentation](./docs/reference.md)
- [Options](#⚙️-options)
- [Whatsapp-web.js docs](https://wwebjs.dev/guide)
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

You can use this [WhatsApp bot template](https://github.com/totigm/whatsapp-bot-template) to [generate your own](https://github.com/totigm/whatsapp-bot-template/generate). This template has everything set up for you, so you can start coding your bot right away.\
The template has TypeScript, Docker, ESLint, and Prettier already configured, so you have a nice developer experience and a production-ready bot.

Start adding commands to your bot by checking the [reference documentation](./docs/reference.md).

> The [WhatsApp bot template](https://github.com/totigm/whatsapp-bot-template) and [bot examples](#-bot-examples) are also a good reference on how to use this library.

## 🤖 Example usage

```ts
import WhatsappBot from "@totigm/whatsapp-bot";

const bot = new WhatsappBot();

bot.addCommand(
    "hey",
    async (message, client) => {
        const chatId = message.from;
        const contact = await client.getContactById(chatId);

        return `Hey ${contact.pushname}! How are you doing?`;
    },
    {
        description: "Say hey",
        explanation: "The bot will say hey to the user using their WhatsApp's name",
        example: {
            output: "Hey Toti! How are you doing?",
        },
    },
);
```

The previous code will create a bot that works like this:

![bot conversation](https://user-images.githubusercontent.com/64804554/185178533-e8a55768-499b-4c78-bdb1-51766f572d51.png)

## 🤩 Bot examples

- [WhatsApp stickers bot](https://github.com/totigm/whatsapp-stickers-bot): WhatsApp bot that converts images and videos to stickers.

## ⚙️ Options

When you create a bot, you can pass an options object to customize it. Check its [options](./docs/options.md) documentation for more information.

```ts
const options = { ... };

const bot = new WhatsappBot(options);
```

## 🚀 Deploying

To deploy your WhatsApp bot, check out [this template](https://github.com/totigm/whatsapp-bot-template), which creates a [Docker](https://www.docker.com) image with everything needed for the [whatsapp-web.js](https://wwebjs.dev) library to work. This will help you to deploy your bot to the cloud provider of your choice.

This library automatically checks if the app is being run on a [Docker](https://www.docker.com) container and set its configurations according to that, so you don't have to worry about it.

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
This project is [MIT](https://github.com/totigm/whatsapp-bot/blob/master/LICENSE) licensed.

---

This project was made with ❤ and TypeScript
