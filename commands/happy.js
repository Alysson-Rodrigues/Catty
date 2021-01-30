const Discord = require("discord.js");
const { execute } = require("./ping");

module.exports = {
  name: "happy",
  description: "what a heck is that??",
  execute(message, args) {
    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0000ff")
      .setTitle(`${message.author.username} is smiling!!`)
      .setImage(
        "https://lh3.googleusercontent.com/iFjN0aRv7Olsk3uHMzLQdALoJVA3qRyAgJ75Z5PsTLOrUOSzSYP2kbGMvwveZc4a7P9byIV5rbZXDwwfttbyD_wP=w640-h400-e365-rj-sc0x00ffffff"
      );

    message.channel.send(exampleEmbed);
  },
};
