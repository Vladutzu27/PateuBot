//in progress

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const bazadedate = require('../command/submit.js');

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: bazadedate.romana
});

// Write some custom code here
