const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Salut, <@!${context.params.event.author.id}>! Uite aici niște instrucțiuni pentru comenzi!`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Comenzi:`,
      "description": "`/brainly exemplu de intrebare` - Caută răspuns pe Brainly dacă ești prea prost ca tesă iți faci tema\n\n\n\n`/teme` - Arată toate temele pe care la mai ai de facut\n\n`/teme mateie` - Arată tema pe care o ai la o materie anume \n\n(de exemplu `/teme mate`)\n\n\n\n`/manuale` - arată o listă cu toate manualele digitale de clasa a 8a\n\n`/manuale materie` - arată manualul digital de la materia respectivă\n\n(de exemplu `/manuale mate`)",
      "color": 0x99b1b1,
      "footer": {
        "text": `Dacă ai vreo nelămurire, dă-i mesaj lui @DiriDam`
      }
    }
  ]
});