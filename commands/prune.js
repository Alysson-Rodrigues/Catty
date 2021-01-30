module.exports = {
  name: "prune",
  description: "Slipt!! let me lick this chat untill it be tottally clean!!",
  execute(message, args) {
    const amount = parseInt(args[0] + 1);

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 100) {
      return message.reply("you need to input a number (This command is unstable, just use it in chats u dont care if lost)");
    }
    message.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      message.channel.send(
        "there was an error trying to prune messages in this channel!"
      );
    });
  },
};
