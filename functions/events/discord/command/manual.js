const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
function thumbnail(materie){
  if (materie === 'franceza') {
  return "https://i.imgur.com/MkNOhWK.png";
  }
  if (materie === 'religiecorint') {
  return "https://i.imgur.com/9kdhxGq.png";
  }
  if (materie === 'religiedsp') {
  return "https://i.imgur.com/xqEa0Fj.png";
  }
  if (materie === 'sociala') {
  return "https://i.imgur.com/8e2hCKn.png";
  }
  if (materie === 'tehnoligica') {
  return "https://i.imgur.com/fvxrAgB.png";
  }
  if (materie === 'consiliere') {
  return "https://i.imgur.com/j0FcMXu.png";
  }
  if (materie === 'desen') {
  return "https://i.imgur.com/izUhixH.png"
  }
  if (materie === 'muzica') {
  return "https://i.imgur.com/8CX7xpb.png"
  }
  if (materie === 'istorie') {
  return "https://i.imgur.com/VK7rK34.png"
  }
  if (materie === 'geografie') {
  return "https://i.imgur.com/rswXzPK.png"
  }
  if (materie === 'biologie') {
  return "https://i.imgur.com/MYBEsPZ.png"
  }
  if (materie === 'chimie') {
  return "https://i.imgur.com/xIA5HYv.png"
  }
  if (materie === 'fizica') {
  return "https://i.imgur.com/LdIoHtT.png"
  }
  if (materie === 'tic') {
  return "https://i.imgur.com/EC5dL5A.png"
  }
  if (materie === 'mate') {
  return "https://i.imgur.com/yBl3T8I.png"
  }
  if (materie === 'romana') {
  return "https://i.imgur.com/BO09Qlk.png"
  }
}
function manual (materie) {
  if (materie === 'franceza') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Limba%20moderna%201%20franceza/Uy5DLiBHUlVQIEVESVRP/A887.pdf';
  }
  if (materie === 'religiecorint') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Religie%20Cultul%20Ortodox/Q09SSU5UIExPR0lTVElD/A889.pdf';
  }
  if (materie === 'religiedsp') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Religie%20Cultul%20Ortodox/RURJVFVSQSBESURBQ1RJ/A890.pdf';
  }
  if (materie === 'sociala') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Educatie%20sociala/Uy5DLiBHUlVQIEVESVRP/A915.pdf';
  }
  if (materie === 'tehnoligica') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Educatie%20tehnologica%20si%20aplicatii%20practice/Q09SSU5UIExPR0lTVElD/A925.pdf';
  }
  if (materie === 'consiliere') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Consiliere%20si%20dezvoltare%20personala/Q09SSU5UIExPR0lTVElD/A918.pdf';
  }
  if (materie === 'desen') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Educatie%20plastica/Uy5DLiBBUlQgS0xFVFQg/A902.pdf';
  }
  if (materie === 'muzica') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Educatie%20muzicala/Uy5DLiBBUlQgS0xFVFQg/A881.pdf';
  }
  if (materie === 'istorie') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Istorie/Uy5DLiBBUlQgS0xFVFQg/A898.pdf';
  }
  if (materie === 'geografie') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Geografie/RURJVFVSQSBTSUdNQSBT/A922.pdf';
  }
  if (materie === 'biologie') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Biologie/Uy5DLiBHUlVQIEVESVRP/A927.pdf';
  }
  if (materie === 'chimie') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Chimie/SU5UVUlURVhUIFMuUi5M/A910.pdf';
  }
  if (materie === 'fizica') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Fizica/Uy5DLiBHUlVQIEVESVRP/A893.pdf';
  }
  if (materie === 'tic') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Informatica%20si%20TIC/RURJVFVSQSBESURBQ1RJ/A919.pdf';
  }
  if (materie === 'mate') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Matematica/SU5UVUlURVhUICBTLlIu/A895.pdf';
  }
  if (materie === 'romana') {
    return 'https://manuale.edu.ro/manuale/Clasa%20a%20VIII-a/Limba%20si%20literatura%20romana/Uy5DLiBBUlQgS0xFVFQg/A906.pdf';
  }
}  

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
      "title": `Manual de ${event.data.options[0].value}`,
      "description": `Uite aici manualul digital, in format PDF. Dacă link-ul nu funcționează, trimite-i un mesaj lui DiriDam.`,
      "color": 0x00FFFF,
      "image": {
        "url": thumbnail(event.data.options[0].value),
        "height": 0,
        "width": 0
      },
      "url": manual(event.data.options[0].value)
    }
  ]
});
