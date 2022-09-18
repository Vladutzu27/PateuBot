module.exports = async (event, context) => {
  const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  const userID = `${context.params.event.author.id}`;

  const username = `${context.params.event.author.username}`;

  const BANNED_WORDS = [`că c`, `ca c`, `ka c`, `ka k` `că k`, `ca k`, `cac`]; // Add banned words

  const regEx = new RegExp(BANNED_WORDS.join('|'), 'gi');

  let messageContent = event.content;

  if (messageContent.match(regEx)) {
    await lib.discord.channels['@0.0.3'].messages.destroy({
      message_id: event.id,
      channel_id: event.channel_id,
    }),
      await lib.discord.users['@0.0.3'].dms.create({
        recipient_id: `${context.params.event.author.id}`,
        content: `:poop:`
      });

    await lib.discord.channels['@0.0.6'].messages.create({
      channel_id: context.params.event.channel_id,
      content: `:poop:`
    });
    
    let result = await lib.discord.channels['@0.2.0'].messages.reactions.create({
      emoji: '💩',
      message_id: `${context.params.event.id}`,
      channel_id: `${context.params.event.channel_id}`,
    });
  }
};
