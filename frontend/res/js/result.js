'use strict';

$(document).ready(function(){
  $.ajax({
      url: '/checkLoggedIn',
      method: 'POST',
      error: function(err){
        window.location.href = '../index.html';
      }
  });

  $.ajax({
    url: '/getLatestScore',
    method: 'GET',
    error: function(err){
      return console.log(err);
    }
  }).done(function(data){
    $('#score').html(data[0].carbon_level);
  });

  $('#btn_back').click(function(){
		window.location.href = 'portal.html';
	});
});
