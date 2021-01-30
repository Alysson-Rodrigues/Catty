module.exports = {
	name: 'argscatty',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if (args[0] === 'whis') {
			return message.channel.send('kas');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};