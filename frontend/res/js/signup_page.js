'use strict';

$(document).ready(function(){
	$('#btn_signup').click(signup);

	function signup(){
		const username = $('#username').val();
		const password = $('#password').val();
        const confirmpassword = $('#confirmpassword').val();

		$.ajax({
            url: '/signup',
            method: 'PUT',
            data: {
                username: username,
                password: password,
                confirmpassword: confirmpassword
            },
            dataType: 'json',
            success: signup_success,
            error: function(err){
                return console.log(err, "Signup error");
            }
      });
	}

	function signup_success(){
		window.location.href = 'index.html';
	}

    $('#btn_back').click(goback);

    function goback(){
        window.location.href = 'index.html';
    }
});
