const Discord = require('discord.js')
const { execute } = require('./ping')

module.exports = {
    "name": "hicatty",
    "description":"the model for any kind of embed",
    execute(message,args){
            // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff33cc')
    .setTitle(':watermelon:Im cattyy:watermelon:')
    .setAuthor('Catty', 'https://cdn.discordapp.com/avatars/803364295080411136/def86273a51f92d6caf7343ecdece653.png', 'https://discord.js.org')
    .setDescription('Im your little cute cat bot!!')
    .setThumbnail('https://cdn.discordapp.com/avatars/803364295080411136/def86273a51f92d6caf7343ecdece653.png')
    .addFields(
        { name: ':watermelon:Version:watermelon:', value: '1.0.3' },
        { name: '"Who is ur creator??"', value: 'Vue', inline: true },
        { name: 'member who said hi', value: `${message.author.username}`, inline: true },
    )
    .setImage('https://cdn.discordapp.com/avatars/803364295080411136/def86273a51f92d6caf7343ecdece653.png')
    .setTimestamp()
    .setFooter('Wait for more updaaates', 'https://cdn.discordapp.com/avatars/803364295080411136/def86273a51f92d6caf7343ecdece653.png');

    message.channel.send(exampleEmbed);
    }

}