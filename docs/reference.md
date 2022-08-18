<h1 align="center">Documentation reference</h1>

# Commands

After you have created your bot, you can start adding commands to it.

To add commands you have to use the `bot.addCommand(name, handler, documentation?)` method.

For example:
```ts
bot.addCommand("ping", () => "pong", {
    description: "Ping the bot",
    explanation: "This command is used to ping the bot in order to check if it is working",
    example: {
        input: "test",
        output: "pong",
    },
});
```

This method takes three arguments:

## name

The name of the command. This is the name that the user will have to type to execute the command.

- Value type: `string`
- required: `true`

## handler

This is a function that will be executed when the user types the command name followed by the bot symbol.
The [`Message`](#message) and [`Client`](#client) types are based on the [whatsapp-web.js](https://wwebjs.dev) libray

If there is, the returned value will be sent to the user as a message. If not, nothing will be sent.

- Value type: `(message?: Message, client?: Client) => string | number | void`
- required: `true`

## documentation

The documentation of the command. This is an object that contains information about the command.

- Value type: [Documentation](#documentation)
- Required: `false`

# Types

## Message

This library uses the [`Message`](https://docs.wwebjs.dev/Message.html) type from [whatsapp-web.js](https://wwebjs.dev), and it adds the following properties:

- [command](#command)
- [text](#text)
- [args](#args)

### command

The name of the command that was executed.
- Value type: `string`

### text

The text that the user typed after the command name.
- Value type: `string`

### args

The array containing every word that the user typed after the command name.
- Value type: `string[]`

## Client

This library uses the [`Client`](https://docs.wwebjs.dev/Client.html) type from [whatsapp-web.js](https://wwebjs.dev).

## Documentation

The `Documentation` type is an object that contains information about the command.

- [description](#description)
- [explanation](#explanation)
- [example](#example)
  - input
  - output

### description

Short description of the command. It will be listed on the general `help` command. If there isn't a description, it will just list the name without any description.

For example, the `ping` command's description is: `Ping the bot`

![general help message](https://user-images.githubusercontent.com/64804554/185166269-56c53425-5344-4e6a-bec5-401eaf1d93b0.png)

- Value type: `string`

### explanation

Longer explanation of the command. It will be listed on the specific `help` command. If there isn't an explanation, the description will be sent instead; if there isn't documentation at all, it will reply `This command has no documentation`.

For example, the `ping` command's explanation is: `This command is used to ping the bot in order to check if it is working`

![specific command help message](https://user-images.githubusercontent.com/64804554/185464037-c98ad2a4-203f-4e85-b0c1-6748113c8d63.png)

- Value type: `string`

### example

An example of the command usage. It will be listed on the specific `help` command. If there isn't an example, nothing will be sent.

Both the input and the output are optional.

In this case, the `input` is empty, and the `output` is `pong`.

![example without input](https://user-images.githubusercontent.com/64804554/185464251-8dc04f7a-df5b-4441-97fe-795f710fb31f.png)

In this one, the `input` is `test`, and the `output` is still `pong`.

![example with input and output](https://user-images.githubusercontent.com/64804554/185464342-15402ac2-54cb-4df0-8e7b-fdadfdf5cb32.png)

Last, but not least, in this case, the `input` is `test`, and the `output` is empty.

![example without output](https://user-images.githubusercontent.com/64804554/185464488-3bda788e-ef0a-487d-a897-1bd542c33274.png)


- Value type: `Object`
  - input: `string`
  - output: `string`
