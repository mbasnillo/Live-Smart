'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

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
