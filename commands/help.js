const Discord = require('discord.js')
const { execute } = require('./ping')

module.exports = {
    "name": "help",
    "description":"about Catty",
    execute(message,args){
            // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff33cc')
    .setTitle('About Catty')
    .setURL('https://discord.js.org/')
    .setAuthor('Catty', 'https://cdn.discordapp.com/avatars/803364295080411136/93ca20bbee9834db62acd272f983cbd5.png', 'https://discord.js.org')
    .setDescription('Usage and info:')
    .setThumbnail('https://cdn.discordapp.com/avatars/803364295080411136/def86273a51f92d6caf7343ecdece653.png')
    .addFields(
        { name: 'Version', value: '1.0.4' },
        { name: '"Who is ur creator??"', value: 'Vue', inline: true },
        { name: 'Member who called me:', value: `${message.author.username}`, inline: true },
        { name: 'Commands', value: `serverinfo, serverdate, avatar, whoami, beep, ping, hicatty,prune(UNSTABLE!!)`},
        { name: 'Reactions', value: `happy, scared, confused, thinking`},
        { name: 'actions', value: `punch, hug, lick, slap, kiss`}
    )
    .setTimestamp()

    message.channel.send(exampleEmbed);
    }

}