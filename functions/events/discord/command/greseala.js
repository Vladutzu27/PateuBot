const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Hei, ${event.data.options[0].value}!`,
      "description": `Ai făcut o greseala gramaticala!\n\n> ${event.data.options[1].value}\n\nCum ar fi fost corect:\n> ${event.data.options[2].value}`,
      "color": 0xc25030
    }
  ]
});
