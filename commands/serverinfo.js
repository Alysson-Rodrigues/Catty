const { description, execute } = require("./ping");

module.exports = {
  name: "serverinfo",
  description: "How many Creatures lives at this home?? :3",
  execute(message, args) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  },
};
