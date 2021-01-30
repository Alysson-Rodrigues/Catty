const Discord = require("discord.js");
const { execute } = require("./ping");
const reactions = require("../assets/reactions.json");

module.exports = {
  name: "lick",
  args: true,
  description: "oownt",
  execute(message, args) {
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    let assetsSort = reactions.lick;
    let assetsSorted = shuffle(assetsSort);
    let assetsChosen = assetsSorted[1];

    let taggedUser = message.mentions.users.map((user) => {
      return user.username[0];
    });

    if (!taggedUser.length) {
      message.reply("did u maked someone??");
      return;
    }
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#000099")
      .setTitle(
        `looks like ${message.author.username} likes ${message.mentions.users.map(
            (user) => {
              return user.username;
            }
          )} taste... :flame:`
      )
      .setImage(assetsChosen);

    message.channel.send(exampleEmbed);
  },
};
