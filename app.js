var express = require('express');

//instance of express
var app = express();
//set up a port - if not there, give it to 3000
var port = process.env.PORT || 7000;
//handler for a route
app.get('/', function(req, res){
	res.send('Welcome to my API!');
});
//have express start listening
app.listen(port, function(){
	console.log('Gulp is running my app on PORT: ' + port);
});