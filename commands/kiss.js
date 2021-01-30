const Discord = require("discord.js");
const { execute } = require("./ping");
const reactions = require("../assets/reactions.json");

module.exports = {
  name: "kiss",
  args: true,
  description: "claps to the couple!!",
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
    let assetsSort = reactions.kiss;
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
        `l ${message.author.username} kissed ${message.mentions.users.map(
            (user) => {
              return user.username;
            }
          )}... claps to this couple!! :heart: :flame:`
      )
      .setImage(assetsChosen);

    message.channel.send(exampleEmbed);
  },
};
