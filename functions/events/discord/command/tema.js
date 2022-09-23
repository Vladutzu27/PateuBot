const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Destructuring objects to minimize code length
const event = context.params.event;
const {channel_id, member, data} = event;

// Retrieving the option data
const searchQuery = data.options[0].value;

// Retrieving the data using the searchQuery
let result = await lib.googlesheets.query['@release'].select({
  range: 'A:C',
  bounds: 'FIRST_EMPTY_ROW',
  where: [{ materie__is: searchQuery }],
});

const database = result.rows[0].fields;

// Retrieving Tema using Dot notation method
const tema = database.tema;

// Retrieving Deadline using Array notation method
const deadline = database['deadline'];


await lib.discord.channels['@release'].messages.create({
  channel_id,
  content: '',
  tts: false,
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
  embeds: [{
    type: 'rich',
    title: `Tema la ${event.data.options[0].value} este`,
    description: `${tema}\n\ntrebuie terminata pana <t:${deadline}:F>`,
    color: 0xffffff,
  }]
});
