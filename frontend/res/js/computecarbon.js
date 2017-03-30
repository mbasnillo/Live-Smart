'use strict';

$(document).ready(function(){
	$('#btn_compute').click(function(){
			var test = $('input[name="food1"]:checked').val();
			console.log(test);
			var test = $('input[name="food2"]:checked').val();
			console.log(test);

	});

	$('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});


});
