'use strict';

const express = require('express');
const session = require('express-session');
const body_parser = require('body-parser');

let app = express();

app.use(
	session({
		secret: 'L1veSmart',
		name: 'SPStudent',
		resave: true,
		rolling: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 7200000 //2 hours
		}
 	})
);

app.use(express.static(__dirname + '/../frontend'));
app.use(body_parser.urlencoded({extended: false}));
app.use(require(__dirname + '/config/router')(express.Router()));

const server = app.listen(8000, 'localhost', 
    	function(){
	        var host = server.address().address;
	        var port = server.address().port;
	        console.log('App is running at http://%s:%s', host, port);
    	});
