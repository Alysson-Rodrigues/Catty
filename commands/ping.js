module.exports = {
	name: 'ping',
	description: 'Test meeee, are ur little cat awake??',
	execute(message, args) {
		message.channel.send('Pong! im awaaake');
	},
};