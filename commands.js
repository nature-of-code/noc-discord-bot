// Command Handler
// Discord Bots
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/bots/discord/06-command-handler.html
// https://youtu.be/B60Q74FHFBQ

const randomwalk = require('./commands/randomwalk.js');

const commands = { randomwalk };

module.exports = async function (msg) {
  let tokens = msg.content.split(' ');
  let command = tokens.shift();
  if (command.charAt(0) === '!') {
    command = command.substring(1);
    commands[command](msg, tokens);
  }
};
