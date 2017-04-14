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

  /********** ARROW AND DISPLAY PART **********/
  $('#q_age').hide();
  $('#q_sex').hide();
  $('#q_educ').hide();
  $('#q_sal').hide();
  $('#q_1').hide();
  $('#q_2').hide();
  $('#q_3').hide();
  $('#q_4').hide();
  $('#q_5').hide();
  $('#q_6').hide();
  $('#q_7').hide();
  $('#q_8').hide();
  $('#q_9').hide();
  $('#q_10').hide();
  $('#q_11').hide();
  $('#q_12').hide();
  $('#q_13').hide();
  $('#q_14').hide();
  $('#q_15').hide();
  $('#q_perc').hide();
  $('#submit_section').hide();

  //INTRO
  $('#right0').click(function(){
    $('#q_start').hide();
    $('#q_age').show();
  });

  //AGE
  $('#left1').click(function(){
    $('#q_age').hide();
    $('#q_start').show();
  });
  $('#right1').click(function(){
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
    $('#q_age').hide();
    $('#q_sex').show();
  });

  //SEX
  $('#left2').click(function(){
    $('#q_sex').hide();
    $('#q_age').show();
  });
  $('#right2').click(function(){
    var sex = $('input[name="sex"]:checked').val();
    if(!sex){
      return alertify.notify("ERROR: Sex cannot be blank!", 'night', 2, function(){ });
    }
    $('#q_sex').hide();
    $('#q_educ').show();
  });

  //EDUCATION
  $('#left3').click(function(){
    $('#q_educ').hide();
    $('#q_sex').show();
  });
  $('#right3').click(function(){
    $('#q_educ').hide();
    $('#q_sal').show();
  });

  //SALARY
  $('#left4').click(function(){
    $('#q_sal').hide();
    $('#q_educ').show();
  });
  $('#right4').click(function(){
    $('#q_sal').hide();
    $('#q_1').show();
  });

  //QUESTION 1
  $('#left5').click(function(){
    $('#q_1').hide();
    $('#q_sal').show();
  });
  $('#right5').click(function(){
    $('#q_1').hide();
    $('#q_2').show();
  });

  //QUESTION 2
  $('#left6').click(function(){
    $('#q_2').hide();
    $('#q_1').show();
  });
  $('#right6').click(function(){
    $('#q_2').hide();
    $('#q_3').show();
  });

  //QUESTION 3
  $('#left7').click(function(){
    $('#q_3').hide();
    $('#q_2').show();
  });
  $('#right7').click(function(){
    $('#q_3').hide();
    $('#q_4').show();
  });

  //QUESTION 4
  $('#left8').click(function(){
    $('#q_4').hide();
    $('#q_3').show();
  });
  $('#right8').click(function(){
    $('#q_4').hide();
    $('#q_5').show();
  });

  //QUESTION 5
  $('#left9').click(function(){
    $('#q_5').hide();
    $('#q_4').show();
  });
  $('#right9').click(function(){
    $('#q_5').hide();
    $('#q_6').show();
  });

  //QUESTION 6
  $('#left10').click(function(){
    $('#q_6').hide();
    $('#q_5').show();
  });
  $('#right10').click(function(){
    $('#q_6').hide();
    $('#q_7').show();
  });

  //QUESTION 7
  $('#left11').click(function(){
    $('#q_7').hide();
    $('#q_6').show();
  });
  $('#right11').click(function(){
    $('#q_7').hide();
    $('#q_8').show();
  });

  //QUESTION 8
  $('#left12').click(function(){
    $('#q_8').hide();
    $('#q_7').show();
  });
  $('#right12').click(function(){
    $('#q_8').hide();
    $('#q_9').show();
  });

  //QUESTION 9
  $('#left13').click(function(){
    $('#q_9').hide();
    $('#q_8').show();
  });
  $('#right13').click(function(){
    $('#q_9').hide();
    $('#q_10').show();
  });

  //QUESTION 10
  $('#left14').click(function(){
    $('#q_10').hide();
    $('#q_9').show();
  });
  $('#right14').click(function(){
    $('#q_10').hide();
    $('#q_11').show();
  });

  //QUESTION 11
  $('#left15').click(function(){
    $('#q_11').hide();
    $('#q_10').show();
  });
  $('#right15').click(function(){
    $('#q_11').hide();
    $('#q_12').show();
  });

  //QUESTION 12
  $('#left16').click(function(){
    $('#q_12').hide();
    $('#q_11').show();
  });
  $('#right16').click(function(){
    $('#q_12').hide();
    $('#q_13').show();
  });

  //QUESTION 13
  $('#left17').click(function(){
    $('#q_13').hide();
    $('#q_12').show();
  });
  $('#right17').click(function(){
    $('#q_13').hide();
    $('#q_14').show();
  });

  //QUESTION 14
  $('#left18').click(function(){
    $('#q_14').hide();
    $('#q_13').show();
  });
  $('#right18').click(function(){
    $('#q_14').hide();
    $('#q_15').show();
  });

  //QUESTION 15
  $('#left19').click(function(){
    $('#q_15').hide();
    $('#q_14').show();
  });
  $('#right19').click(function(){
    $('#q_15').hide();
    $('#q_perc').show();
    $('#submit_section').show();
  });

  //PERCEPTION
  $('#left20').click(function(){
    $('#q_perc').hide();
    $('#q_15').show();
    $('#submit_section').hide();
  });

  /******* END OF ARROW AND DISPLAY PART ******/

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
		window.location.href = 'portal.html';
	});

});
