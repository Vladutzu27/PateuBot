//works

module.exports = async (event, context) => {
  const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  const userID = `${context.params.event.author.id}`;

  const username = `${context.params.event.author.username}`;

  const BANNED_WORDS = [`Gabi`, `Ilona`, `Gabriela`, `Irina`, `Nicoleta`, `Gabriela`, `Gina`, `Angelica`, `Doina`, `Loredana`, `Dalia`, `Claudia`]; // Add banned words

  const regEx = new RegExp(BANNED_WORDS.join('|'), 'gi');

  let messageContent = event.content;

  if (messageContent.match(regEx)) {
    await lib.discord.channels['@0.0.3'].messages.destroy({
      message_id: event.id,
      channel_id: event.channel_id,
    }),
      await lib.discord.users['@0.0.3'].dms.create({
        recipient_id: `${context.params.event.author.id}`,
        content: `Ba nu mai zice de mame!`
      });

    await lib.discord.channels['@0.0.3'].messages.create({
      channel_id: ``, // Log channel of your server where you'll be notified when someone swears'
      content: '', // Message header
      tts: false,
      embed: {
        type: 'rich',
        author: {
          name: `${username}`,
          icon_url: '', //author user icon link
        },
        title: '', // Embed title
        description: `${username}, nu ai voie să zici de mame!`, // This is changeable
        fields: [
          {
            name: 'User',
            value: `<@!${userID}> | \`${userID}\``,
          },
          {
            name: 'Filtered Message',
            value: `*${messageContent}*`,
          },
        ],
        timestamp: new Date(),
        footer: {
          text: '',
        },
      },
    });
  }
};
