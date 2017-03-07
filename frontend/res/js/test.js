'use strict';

$(document).ready(function(){
	console.log("Hello world");

	$("#btn_login").click(function(){
		var username = $("#username").val();
		console.log(username);
	});
});
