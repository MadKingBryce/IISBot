var discord = require('./discord')

module.exports = function(app){ //sets routes

    
	app.get('/toggle', function(req, res){
        discord.toggleUse()
        res.send("Nothing to see here. All things happen behind the sceense")
    })
}