const Discord = require("discord.js");
const { execute } = require("./ping");
const reactions = require("../assets/reactions.json");

module.exports = {
  name: "scared",
  description: "what a heck is that??",
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
    assetsSort = reactions.scared;
    assetsSorted = shuffle(assetsSort);
    assetsChosen = assetsSorted[1];

    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#000099")
      .setTitle(
        `${message.author.username} is scared... what did u do \n to him/her?? you bad!!`
      )
      .setImage(assetsChosen);

    message.channel.send(exampleEmbed);
  },
};
