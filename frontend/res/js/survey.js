'use strict';

$(document).ready(function(){
  alertify.set('notifier','position', 'top-right');

  $('#btn_submit').click(function(){
    var age = $('#form_age').val();
    if(!age){
      return alertify.notify("ERROR: Age cannot be blank!", 'night', 2, function(){ });
    }
    if(isNaN(age)){
      return alertify.notify("ERROR: Age must be a number!", 'night', 2, function(){ });
    }
    console.log(age);

    var sex = $('input[name="sex"]:checked').val();
    if(!sex){
      return alertify.notify("ERROR: Sex cannot be blank!", 'night', 2, function(){ });
    }
    console.log(sex);

    var education = $('input[name="education"]:checked').val();
    if(!education){
      return alertify.notify("ERROR: Education cannot be blank!", 'night', 2, function(){ });
    }
    console.log(education);

    var salary = $('input[name="salary"]:checked').val();
    if(!salary){
      return alertify.notify("ERROR: Salary cannot be blank!", 'night', 2, function(){ });
    }
    console.log(salary);

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
    console.log(score);

    var perception = $('input[name="perception"]:checked').val();
    if(!perception){
      return alertify.notify("ERROR: Perception cannot be blank!", 'night', 2, function(){ });
    }
    console.log(perception);

  });

  $('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});

});
