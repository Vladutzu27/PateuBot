const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Cauta in dictionar cuvântul „${event.data.options[0].value}”.`,
      "description": "",
      "color": 0x020202,
      "image": {
        "url": `https://i.imgur.com/e6dYos5.png`,
        "height": 0,
        "width": 0
      },
      "url": `https://dexonline.ro/definitie/${encodeURIComponent(event.data.options[0].value)}`
    }
  ]
});
