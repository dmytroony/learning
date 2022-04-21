const Discord = require('discord.js');
const Twit = require('twit');
require('dotenv').config();

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const jokes = [
  'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
  '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
  'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
  'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
  'If you listen to a UNIX shell, can you hear the C?',
  'Why do Java programmers have to wear glasses? Because they don’t C#.',
  'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
  'When Apple employees die, does their life HTML5 in front of their eyes?',
  'Without requirements or design, programming is the art of adding bugs to an empty text file.',
  'Before software can be reusable it first has to be usable.',
  'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
  'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
  'There are two ways to write error-free programs; only the third one works.',
];

client.on('message', msg => {
  if (msg.content === '?joke') {
    msg.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
  }
  if (msg.content === 'hello!') msg.reply('bello!');
});

// const T = new Twit({
//   consumer_key: process.env.API_TOKEN,
//   consumer_secret: process.env.API_SECRET,
//   access_token: process.env.ACCESS_KEY,
//   access_token_secret: process.env.ACCESS_SECRET,
//   bearer_token: process.env.BEARER_TOKEN,
//   timeout_ms: 60 * 1000,
// });

// const dest = '960280278297874552';
// const stream = T.stream('statuses/filter', {
//   follow: '32771325', // @stupidcounter
//   // follow: '158331222', // @mrbean
// });
//
// stream.on('tweet', (tweet) => {
//   const twitterMessage = `Read the latest tweet by ${tweet.user.name} (@${tweet.user.screen_name}) here: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
//   client.channels.cache.get(dest).send(twitterMessage);
//   return;
// });
