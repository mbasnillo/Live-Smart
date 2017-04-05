'use strict';

$(document).ready(function(){
  alertify.set('notifier','position', 'top-right');
  $.ajax({
          url: '/checkLoggedOut',
          method: 'POST',
          success: foo,
          error: function(err){
            alertify.notify(err.responseText, 'night', 2, function(){ });
            window.location.href = 'portal.html';
          }
      });
  function foo(){}

  $(document).keypress(function(event){
      if(event.keyCode == 13){
          $('#btn_signup').click();
      }
  });

	$('#btn_signup').click(signup);

	function signup(){
		const username = $('#username').val();
		const password = $('#password').val();
    const confirmpassword = $('#confirmpassword').val();

		$.ajax({
            url: '/signup',
            method: 'PUT',
            data: {
                username: username,
                password: password,
                confirmpassword: confirmpassword
            },
            dataType: 'json',
            success: signup_success,
            error: function(err){
                return alertify.notify(err.responseText, 'night', 2, function(){ });
            }
      });
	}

	function signup_success(){
		window.location.href = 'index.html';
	}

  $('#btn_back').click(goback);

  function goback(){
      window.location.href = 'index.html';
  }
});
