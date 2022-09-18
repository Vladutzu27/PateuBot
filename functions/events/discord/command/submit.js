//does not work: if you know how to fix it, submit a pull request, would be much apreciated

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

//romana
let romana = "-";
let romanaDeadline = "-";
//mate
let mate = "-";
let mateDeadline = "-";
//religie
let religie = "-";
let religieDeadline = "-";
//engleza
let engleza = "-";
let englezaDeadline = "-";
//franceza
let franceza = "-";
let francezaDeadline = "-";
//desen
let desen = "-";
let desenDeadline = "-";
//sport
let sport = "-";
let sportDeadline = "-";
//biologie
let biologie = "-";
let biologieDeadline = "-";
//fizica
let fizica = "-";
let fizicaDeadline = "-";
//tic
let tic = "-";
let ticDeadline = "-";
//istorie
let istorie = "-";
let istorieDeadline = "-";
//chimie
let chimie = "-";
let chimieDeadline = "-";
//consiliere
let consiliere = "-";
let consiliereDeadline = "-";
//educatie sociala
let sociala = "-";
let socialaDeadline = "-";
//optional
let optional = "-";
let optionalDeadline = "-";
//tehnologica
let tehnologica = "-";
let tehnologicaDeadline = "-";
//geografie
let geografie = "-";
let geografieDeadline = "-";
//muzica
let muzica = "-";
let muzicaDeadline = "-";
let day = "0";
let month = "0";
let deadline = event.data.options[1].value.includes("/") ? event.data.options[1].value.split("/") : event.data.options[1].value.split(".");

month = deadline[1]
day = deadline[0]

/*
let result = await lib.googlesheets.query['@0.3.0'].select({
  range: `bazadedate!A:C`,
  bounds: 'FIRST_EMPTY_ROW',
  where: [{}],
  limit: {
    'count': 0,
    'offset': 0
  }
});*/

//console.log(result);

if (event.data.options[0].value == "romana"){
    romana = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    romanaDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "mate"){
    mate = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    mateDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "religie"){
    religie = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    religieDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "engleza"){
    engleza = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    englezaDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "franceza"){
    franceza = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    francezaDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "desen"){
    desen = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    desenDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "sport"){
    sport = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    sportDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "biologie"){
    biologie = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    biologieDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "fizica"){
    fizica = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    fizicaDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "tic"){
    tic = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    ticDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "istorie"){
    istorie = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    istorieDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "chimie"){
    chimie = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    chimieDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "consiliere"){
    consiliere = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    consiliereDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "sociala"){
    sociala = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    socialaDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "optional"){
    optional = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    optionalDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "tehnologică"){
    tehnologica = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    tehnologicaDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "geografie"){
    geografie = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    geografieDeadline = Date.parse(ts)/1000;
}
if (event.data.options[0].value == "muzica"){
    muzica = event.data.options[2].value;
    let year = new Date(Date.now()).getFullYear();
    let ts = new Date(`${month}/${day}/${year}`);
    console.log(`<t:${Date.parse(ts)/1000}:R>`);
    muzicaDeadline = Date.parse(ts)/1000;
}

function emoji(materie) {
  if (materie == "romana") {
    return "📚 Româna";
  }
  if (materie == "mate") {
    return "🔢 Matematică";
  }
  if (materie == "religie") {
    return "✝️ Religie";
  }
  if (materie == "engleza") {
    return "🇬🇧 Engleză";
  }
  if (materie == "franceza") {
    return "🇫🇷 Franceză";
  }
  if (materie == "desen") {
    return "🎨 Desen";
  }
  if (materie == "sport") {
    return "⚽ Sport";
  }
  if (materie == "biologie") {
    return "🍃 Biologie";
  }
  if (materie == "fizica") {
    return "🍎 Fizică";
  }
  if (materie == "tic") {
    return "🖥️ Informatică și TIC";
  }
  if (materie == "istorie") {
    return "🏰 Istorie";
  }
  if (materie == "chimie") {
    return "🧪 Chimie";
  }
  if (materie == "consiliere") {
    return "🎭 Consiliere";
  }
  if (materie == "sociala") {
    return "💵 Educație Socială";
  }
  if (materie == "optional") {
    return "🏰 Istorie Opțional";
  }
  if (materie == "tehnologica") {
    return "💡 Educație Tehnologică";
  }
  if (materie == "geografie") {
    return "🌍 Geografie";
  }
  if (materie == "muzica") {
    return "🎶 Muzică";
  }
}

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `<@!${context.params.event.member.user.id}>, tema la ${emoji(event.data.options[0].value)} este ${event.data.options[2].value}. Trebuie terminată până <t:${romanaDeadline}:F>`
});
