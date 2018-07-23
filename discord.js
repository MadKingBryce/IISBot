var discord = require('discord.js')
var d = new discord.Client()

d.token = "NDcwOTU4NDE3NTMyNjgyMjQw.Djd8xA.rfJ1IWvDdoUoYnW-XXUMSpOVVDM";
//router(app)
var go = True;

while(go) {
    d.on('ready', () => {
        console.log('Deez nuts')
    })

    d.on('message', function(message){
        if(message.channel.name == "bots-emojis" && message.author.username == "L'étranger"){
            message.reply("Stranger should be banned from the server")
        }
        console.log(message)
        //console.log(message.channel.name + ":   " + message.author.username + ": aka   " + message.author.username + " :     " + message.content)
    })
}


exports.toggleUse = function(){
    go = !go
}

d.login(d.token)