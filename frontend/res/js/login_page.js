'use strict';

$(document).ready(function(){
	$('#btn_login').click(login);

	function login(){
		const username = $('#username').val();
		const password = $('#password').val();

		$.ajax({
            url: '/login',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: login_success,
            error: function(err){
                return console.log(err, "Login error");
            }
        });
	}

	function login_success(){
		window.location.href = 'portal.html';
	}
});
