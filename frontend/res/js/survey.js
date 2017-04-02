'use strict';

$(document).ready(function(){

  $('#btn_submit').click(function(){
    var test = $('#form_age').val();
    console.log(test);
    var test = $('input[name="sex"]:checked').val();
    console.log(test);
    //var test = $('input[name="civil_status"]:checked').val();
    //console.log(test);
    var test = $('input[name="education"]:checked').val();
    console.log(test);
    var test = $('input[name="salary"]:checked').val();
    console.log(test);
  });

  $('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});

});
