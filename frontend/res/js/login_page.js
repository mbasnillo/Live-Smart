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

	function login_success(data){
        var user = data[0];
        localStorage.user = JSON.stringify(user);

        if(user.is_admin == 1){
            window.location.href = '/views/admin.html';
        }
        if(user.is_admin == 0){
            window.location.href = 'portal.html';
        }
        
        /*
        window.location.href = 'portal.html';
		*/
	}

    $('#btn_signup').click(signup);

    function signup(){
        window.location.href = 'signup.html';
    }
});
