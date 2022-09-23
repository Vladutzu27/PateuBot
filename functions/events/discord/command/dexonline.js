const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `Mai multe resurse de învățare`,
          "url": `https://clasa8ablog.wixsite.com/clasa-8a/post/mai-multe-resurse-folositoare-pentru-educa%C8%9Bie`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `💻`
          },
          "type": 2
        },
        {
          "style": 5,
          "label": `Descarca toat manualele in format PDF`,
          "url": `https://easyupload.io/ydpiji`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `📚`
          },
          "type": 2
        }
      ]
    }
  ],
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
