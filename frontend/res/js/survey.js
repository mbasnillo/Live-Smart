'use strict';

$(document).ready(function(){

  $('#btn_submit').click(function(){
    /*
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
    */

    var score = 0;
    for(var i = 1; i<=15; i++){
      var question = "q" + i;
      var res = $('input[name='+question+']:checked').val();
      res = res * 1;
      score += res;
    }
    console.log(score);

  });

  $('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});

});
