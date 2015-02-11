var express = require('express'),
	website = express(),
	http = require('http').Server(website),
	io = require('socket.io')(http),
	routes = require('./routes'),
	path = require('path'),
	logger = require('express-logger'),
	json = require('express-json'),
	bodyParser = require('body-parser'),
	methodOverride = require('express-method-override');


website.set('port', process.env.PORT || 3000);
website.set('views', path.join(__dirname, 'views'));
website.set('view engine', 'ejs');
website.set('socket', io);
website.use(logger({path: './logs/logfile.txt'}));
website.use(json());
website.use(bodyParser.urlencoded({ extended: false }));
website.use(methodOverride());
website.use(express.static(path.join(__dirname, 'public')));


// Setup routing
require('./routing')(website);

http.listen(website.get('port'), function(){
	console.log('Website ready, listening on port: ' + website.get('port'));
});

module.exports = website;