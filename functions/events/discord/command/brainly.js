//this one works

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
const question = event.data.options[0].value;
const formatedQuestion = encodeURIComponent(question);

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Caută pe Brainly`,
      "description": `${question}`,
      "color": 0x000000,
      "thumbnail": {
        "url": `https://i.imgur.com/hW58Eq1.png`,
        "height": 0,
        "width": 0
      },
      "url": `https://brainly.ro/app/ask?q=${formatedQuestion}`
    }
  ]
});
