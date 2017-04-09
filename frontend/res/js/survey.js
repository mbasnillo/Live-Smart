'use strict';

$(document).ready(function(){
  alertify.set('notifier','position', 'top-right');
  $.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

  $('#btn_submit').click(function(){
    var age = $('#form_age').val();
    if(!age){
      return alertify.notify("ERROR: Age cannot be blank!", 'night', 2, function(){ });
    }
    if(isNaN(age)){
      return alertify.notify("ERROR: Age must be a number!", 'night', 2, function(){ });
    }
    if(age < 16 || age > 100){
      return alertify.notify("ERROR: Please enter a valid age!", 'night', 2, function(){ });
    }

    var sex = $('input[name="sex"]:checked').val();
    if(!sex){
      return alertify.notify("ERROR: Sex cannot be blank!", 'night', 2, function(){ });
    }

    var education = $('input[name="education"]:checked').val();
    if(!education){
      return alertify.notify("ERROR: Education cannot be blank!", 'night', 2, function(){ });
    }

    var salary = $('input[name="salary"]:checked').val();
    if(!salary){
      return alertify.notify("ERROR: Salary cannot be blank!", 'night', 2, function(){ });
    }

    var score = 0;
    for(var i = 1; i<=15; i++){
      var question = "q" + i;
      var res = $('input[name='+question+']:checked').val();
      if(!res){
        return alertify.notify("ERROR: One or more question/s was not answered!", 'night', 2, function(){ });
      }
      res = res * 1;
      score += res;
    }

    var perception = $('input[name="perception"]:checked').val();
    if(!perception){
      return alertify.notify("ERROR: Perception cannot be blank!", 'night', 2, function(){ });
    }

    $.ajax({
      url: '/answerSurvey',
      method: 'PUT',
      data: {
        age: age,
        sex: sex,
        education: education,
        salary: salary,
        score: score,
        perception: perception
      },
      dataType: 'json',
      success: survey_success,
      error: function(err){
          console.log(err);
          return alertify.notify(err.responseText, 'night', 2, function(){ });
      }
    });

  }); //end of btn_submit function

  function survey_success(){
    window.location.href = 'viewstats.html';
  }

  $('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});

});
