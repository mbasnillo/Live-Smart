'use strict';

const express = require('express');
const body_parser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../frontend'));
app.use(body_parser.urlencoded({extended: false}));

const server = app.listen(8000, "localhost", 
    	function(){
	        var host = server.address().address;
	        var port = server.address().port;
	        console.log('App is running at http://%s:%s', host, port);
    	});
