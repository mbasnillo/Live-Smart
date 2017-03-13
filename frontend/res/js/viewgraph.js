'use strict';

$(document).ready(function(){
	$('#btn_test').click(test);

	function test(){
		$.ajax({
            url: '/test',
            method: 'POST',
            success: test_success,
            error: function(err){
                return console.log(err, "Test error");
            }
        });
	}

	function test_success(){
		console.log("Success!");
	}

	$('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});

	
});
