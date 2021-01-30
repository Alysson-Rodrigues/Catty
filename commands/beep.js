const { execute } = require("./ping");

module.exports = {
    "name":"beep",
    "Description":"Beep Booop, these humans insist on saying that i am a robot, so i will imitate one !!",
    execute(message, args){
        message.channel.send("Boop.");
    }
}