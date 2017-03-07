'use strict';

$(document).ready(function(){
	$('#btn_logout').click(logout);

	function logout(){
		const username = $('#username').val();
		const password = $('#password').val();

		$.ajax({
            url: '/logout',
            method: 'POST',
            success: logout_success,
            error: function(err){
                return console.log(err, "Logout error");
            }
        });
	}

	function logout_success(){
		window.location.href = 'index.html';
	}
});
