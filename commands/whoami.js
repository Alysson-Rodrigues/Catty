module.exports = {
  name: "whoami",
  description:
    "these humans... so clumsy... they forget even their own names!!",
  execute(message, args) {
    message.reply(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id} \n dont forget ur username again, you clumsy!!`
    );
  },
};
