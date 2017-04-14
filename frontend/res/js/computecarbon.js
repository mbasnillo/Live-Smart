'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

	/* HIDDEN AREA */
	$('#compute_section').hide();
	$('#q_f1').hide();
	$('#q_f2').hide();
	$('#q_f3').hide();
	$('#q_f4').hide();
	$('#q_t1').hide();
	$('#q_t2').hide();
	$('#q_t3').hide();
	$('#q_t4').hide();
	$('#q_t5').hide();
	$('#q_h1').hide();
	$('#q_h2').hide();
	$('#q_h3').hide();
	$('#q_h4').hide();

	/* LEFT RIGHT BUTTONS AREA */
	$('#right0').click(function(){
		$('#q_start').hide();
		$('#q_f1').show();
	});

	$('#left1').click(function(){
		$('#q_f1').hide();
		$('#q_start').show();
	});
	$('#right1').click(function(){
		$('#q_f1').hide();
		$('#q_f2').show();
	});

	$('#left2').click(function(){
		$('#q_f2').hide();
		$('#q_f1').show();
	});
	$('#right2').click(function(){
		$('#q_f2').hide();
		$('#q_f3').show();
	});

	$('#left3').click(function(){
		$('#q_f3').hide();
		$('#q_f2').show();
	});
	$('#right3').click(function(){
		$('#q_f3').hide();
		$('#q_f4').show();
	});

	$('#left4').click(function(){
		$('#q_f4').hide();
		$('#q_f3').show();
	});
	$('#right4').click(function(){
		$('#q_f4').hide();
		$('#q_t1').show();
	});

	$('#left5').click(function(){
		$('#q_t1').hide();
		$('#q_f4').show();
	});
	$('#right5').click(function(){
		$('#q_t1').hide();
		$('#q_t2').show();
	});

	$('#left6').click(function(){
		$('#q_t2').hide();
		$('#q_t1').show();
	});
	$('#right6').click(function(){
		$('#q_t2').hide();
		$('#q_t3').show();
	});

	$('#left7').click(function(){
		$('#q_t3').hide();
		$('#q_t2').show();
	});
	$('#right7').click(function(){
		$('#q_t3').hide();
		$('#q_t4').show();
	});

	$('#left8').click(function(){
		$('#q_t4').hide();
		$('#q_t3').show();
	});
	$('#right8').click(function(){
		$('#q_t4').hide();
		$('#q_t5').show();
	});

	$('#left9').click(function(){
		$('#q_t5').hide();
		$('#q_t4').show();
	});
	$('#right9').click(function(){
		$('#q_t5').hide();
		$('#q_h1').show();
	});

	$('#left10').click(function(){
		$('#q_h1').hide();
		$('#q_t5').show();
	});
	$('#right10').click(function(){
		$('#q_h1').hide();
		$('#q_h2').show();
	});

	$('#left11').click(function(){
		$('#q_h2').hide();
		$('#q_h1').show();
	});
	$('#right11').click(function(){
		$('#q_h2').hide();
		$('#q_h3').show();
	});

	$('#left12').click(function(){
		$('#q_h3').hide();
		$('#q_h2').show();
	});
	$('#right12').click(function(){
		$('#q_h3').hide();
		$('#q_h4').show();
		$('#compute_section').show();
	});

	$('#left13').click(function(){
		$('#q_h4').hide();
		$('#q_h3').show();
		$('#compute_section').hide();
	});



	$('#btn_compute').click(function(){
		for(var i = 1; i<=4; i++){
      var question = "qf" + i;
      var res = $('input[name='+question+']:checked').val();
      if(!res){
        return alertify.notify("ERROR: One or more food question/s was not answered!", 'night', 2, function(){ });
      }
    }
		for(var i = 1; i<=5; i++){
      var question = "qt" + i;
      var res = $('input[name='+question+']:checked').val();
      if(!res){
        return alertify.notify("ERROR: One or more travel question/s was not answered!", 'night', 2, function(){ });
      }
    }
		for(var i = 1; i<=4; i++){
      var question = "qh" + i;
      var res = $('input[name='+question+']:checked').val();
      if(!res){
        return alertify.notify("ERROR: One or more home question/s was not answered!", 'night', 2, function(){ });
      }
    }
	});

	$('#btn_back').click(function(){
		window.location.href = 'portal.html';
	});


});
