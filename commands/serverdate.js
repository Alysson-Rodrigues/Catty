const { execute } = require("./ping");

module.exports = {
  name: "serverdate",
  description: "when did this home was created??",
  execute(message, args) {
    message.channel.send(
      `The server was created at ${message.guild.createdAt}`
    );
  },
};
