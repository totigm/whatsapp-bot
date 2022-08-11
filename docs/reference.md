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

![general help message](https://user-images.githubusercontent.com/64804554/183616403-68b5d012-5f63-4a21-93a3-d04567ca7c7f.png)

- Value type: `string`

### explanation

Longer explanation of the command. It will be listed on the specific `help` command. If there isn't an explanation, the description will be sent instead; if there isn't documentation at all, it will reply `This command has no documentation`.

For example, the `ping` command's explanation is: `This command is used to ping the bot in order to check if it is working`

![specific command help message](https://user-images.githubusercontent.com/64804554/183637354-8bf79b27-2354-42aa-ba77-64bf350a54e5.png)

- Value type: `string`

### example

An example of the command usage. It will be listed on the specific `help` command. If there isn't an example, nothing will be sent.

Both the input and the output are optional.

In this case, the `input` is empty, and the `output` is `pong`.

![example without input](https://user-images.githubusercontent.com/64804554/183637354-8bf79b27-2354-42aa-ba77-64bf350a54e5.png)

In this one, the `input` is `test`, and the `output` is still `pong`.

![example with input and output](https://user-images.githubusercontent.com/64804554/183638122-fb4257ce-f1db-483e-918c-5b1851ce3328.png)

Last, but not least, in this case, the `input` is `test`, and the `output` is empty.

![example without output](https://user-images.githubusercontent.com/64804554/183638487-eaba33c6-9b21-4e31-8cb4-ce47daaad80c.png)


- Value type: `Object`
  - input: `string`
  - output: `string`
