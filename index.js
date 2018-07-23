var express = require('express');
var http = require('http');	
var app = express();
var router = require('./router');
var bodyParser = require('body-parser')
app.use(bodyParser.json({type: '*/*'}))


var port = process.env.PORT || 3000 
var server = http.createServer(app)
server.listen(port);
console.log('Server listening on ' + port)


