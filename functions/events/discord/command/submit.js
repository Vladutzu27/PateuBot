const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
const { channel_id, data, member, } = event;

// Slash command options:
let subject = data.options[0].value;
let deadline = data.options[1].value;
let homework = data.options[2].value;

// Relative Timestamp:
let day = deadline.match(/\d/g)[0];
let month = deadline.match(/\d/g)[1];
let year = new Date().getFullYear();
let ts = new Date(`${month}/${day}/${year}`);
deadline = Date.parse(ts)/1000;

// Please try it now.
await lib.googlesheets.query['@release'].update({
  range: 'A:C', bounds: 'FIRST_EMPTY_ROW',
  where: [{ 'materie__is': subject }],
  fields: {
    'deadline': deadline,
    'tema': homework
  }
});

await lib.discord.channels['@release'].messages.create({
  channel_id,
  content: `<@!${member.user.id}>, tema adaugata la baza de date cu succes`
});

function emoji(materie) {
  if (materie == "romana") return "📚 Româna";
  else if (materie == "mate") return "🔢 Matematică";
  else if (materie == "religie") return "✝️ Religie";
  else if (materie == "engleza") return "🇬🇧 Engleză";
  else if (materie == "franceza") return "🇫🇷 Franceză";
  else if (materie == "desen") return "🎨 Desen";
  else if (materie == "sport") return "⚽ Sport";
  else if (materie == "biologie") return "🍃 Biologie";
  else if (materie == "fizica") return "🍎 Fizică";
  else if (materie == "tic") return "🖥️ Informatică și TIC";
  else if (materie == "chimie") return "🧪 Chimie";
  else if (materie == "consiliere") return "🎭 Consiliere";
  else if (materie == "sociala") return "💵 Educație Socială";
  else if (materie == "optional") return "🏰 Istorie Opțional";
  else if (materie == "tehnologica") return "💡 Educație Tehnologică";
  else if (materie == "geografie") return "🌍 Geografie";
  else if (materie == "muzica") return "🎶 Muzică";
}
