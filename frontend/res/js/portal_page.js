'use strict';

$(document).ready(function(){
	$('#btn_logout').click(logout);

	function logout(){
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
