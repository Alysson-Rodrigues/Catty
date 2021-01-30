const Discord = require("discord.js");
const { execute } = require("./ping");
const reactions = require("../assets/reactions.json");

module.exports = {
  name: "confused",
  description: "what??",
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
    assetsSort = reactions.confused;
    assetsSorted = shuffle(assetsSort);
    assetsChosen = assetsSorted[1];

    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#6600ff")
      .setTitle(
        `${message.author.username} is confused...\n what is going on here??}??`
      )
      .setImage(assetsChosen);

    message.channel.send(exampleEmbed);
  },
};