// DEKLARASI PACKAGE
var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const config = require('./config/database');

var app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieSession({
	name: 'session',
	maxAge: 3000000,
	keys: ['key1', 'key2']
}))

// SET VIEW ENGINE
app.set('views', path.join(__dirname, '/view'));
app.set('view engine','ejs');

// SET ROUTING
let web = require('./routes/web');
app.use('/', web);

app.use(express.static(__dirname + '/public'));

app.set('trust proxy', 1) // trust first proxy


// JALANIN SERVER
app.listen(3003, function(){
	console.log('Hello World :)');
});
