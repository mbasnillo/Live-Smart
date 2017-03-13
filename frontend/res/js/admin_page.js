'use strict';

$(document).ready(function(){
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
		window.location.href = 'adminstats.html';
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
