const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
  console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false
});

client.on('ready', async () => {
  const rpc = new Discord.RichPresence({
    startTimestamp: Date.now()
  })
    .setApplicationId('1110523342479425636')
    .setType('STREAMING')
    .setURL(`https://www.twitch.tv/suvo`)
    .setDetails(`SEX WITH UR MOMMY`)
    .setName(`SEX WITH UR MOMMY`)
    .setState(`MOMMY LOVER ??`)
    .setParty({
      max: 5,
      current: 4,
      id: Discord.getUUID(),
    })
    .setAssetsLargeImage(`mp:attachments/1158679802056810506/1225166675163480245/anime-gif-anime-gif-1250282.png?ex=66202461&is=660daf61&hm=025ee11cd5d90f8007a6aced0d861db874fe3080a334cae6778f5397b995ca9d&`)
    .setAssetsLargeText(`crazy`)
    .addButton(`Suvo ?`, `https://www.instagram.com/krishdgaf?igsh=YTQwZjQ0NmI0OA==`)
    .addButton(`Only Fans`, `https://onlyfans.wtf/krishdgaf`);

  client.user.setActivity(rpc.toJSON());
  console.log(`${client.user.tag} is ready!`);
});

// Account Token
client.login(mySecret = process.env['token'])
