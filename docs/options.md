<h1 align="center">⚙ Options ⚙</h1>

Your bot can be customized if you want it to have a different behaviour. The options that it supports are:

- [client](#client)
- [bot](#bot)

## client

This is an object that contains the options that will be passed to the [whatsapp-web.js](https://wwebjs.dev) client. You can find the options that it supports [here](https://docs.wwebjs.dev/Client.html#Client).

## bot

This is an object that contains the options that will be passed to the [@totigm/bot-builder](https://www.npmjs.com/package/@totigm/bot-builder) library. You can find the options that it supports [here](https://github.com/totigm/bot-builder/blob/main/docs/bot-options.md).

Note that you won't be able to change the `contentProp`, `textFormatting`, nor `authData` properties, as they are fixed to match the [whatsapp-web.js](https://wwebjs.dev) library.

Also, the `messageEvent` property only supports `message` and `message_create` events. If you set this value to `message_create`, messages sent by the bot will also be processed, while if you set it to `message`, messages sent by the bot will be ignored.
