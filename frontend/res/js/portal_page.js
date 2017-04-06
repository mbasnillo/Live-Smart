'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = 'index.html';
          }
      });

	$.ajax({
        url: '/getName',
        method: 'POST',
        success: writeName,
        error: function(err){
            return console.log(err, "Logout error");
        }
    });

    function writeName(data){
    	document.getElementById('name').innerHTML += '<b>' + data + '</b>';
    }

	$('#btn_viewAll').click(function(){
		window.location.href = 'views/viewstats.html';
	});

	$('#btn_survey').click(function(){
		window.location.href = 'views/survey.html';
	})

	$('#btn_viewOwn').click(function(){
		window.location.href = 'views/viewgraph.html';
	});

	$('#btn_compute').click(function(){
		window.location.href = 'views/computecarbon.html';
	})

	$('#btn_logout').click(logout);

	function logout(){
		$.ajax({
            url: '/logout',
            method: 'POST',
            success: logout_success,
            error: function(err){
                window.location.href = 'index.html';
            }
        });
	}

	function logout_success(){
		window.location.href = 'index.html';
	}
});
