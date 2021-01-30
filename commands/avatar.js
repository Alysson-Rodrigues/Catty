module.exports ={
    "name":"avatar",
    args: true,
    "description":"Ow, did u forgot what is ur appearance here??",
    execute(message, args){
        const avatarList = message.mentions.users.map((user) => {
        return `${user.username}'s avatar: <${user.displayAvatarURL({
            format: "png",
            dynamic: true,
        })}>`;
        });
        message.channel.send(avatarList);

}}