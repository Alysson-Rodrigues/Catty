const Discord = require("discord.js");
const { execute } = require("./ping");
const reactions = require("../assets/reactions.json");

module.exports = {
  name: "thinking",
  description: "thinking a loooot",
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
    assetsSort = reactions.thinking;
    assetsSorted = shuffle(assetsSort);
    assetsChosen = assetsSorted[1];

    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#6600ff")
      .setTitle(
        `${message.author.username} is thinking...\n what are u thinking about,${message.author.username}??`
      )
      .setImage(assetsChosen);

    message.channel.send(exampleEmbed);
  },
};
