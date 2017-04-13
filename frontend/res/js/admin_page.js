'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

	$('#btn_viewAll').click(function(){
		window.location.href = 'viewstats.html';
	});

	$('#btn_viewOne').click(function(){
		window.location.href = 'searchgraph.html';
	});

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
		window.location.href = '../index.html';
	}

	$('#btn_deleteUser').click(deleteUser);

	function deleteUser(){
		window.location.href = 'deleteuser.html'
	}
});
