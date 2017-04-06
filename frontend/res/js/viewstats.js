'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

	$('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});


});
