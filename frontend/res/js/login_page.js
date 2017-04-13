'use strict';

$(document).ready(function(){
  alertify.set('notifier','position', 'top-right');
  $('#signup_section').hide();

  $('#show_login').click(function(){
    $('#signup_section').hide();
    $('#login_section').show();
  });

  $('#show_signup').click(function(){
    $('#login_section').hide();
    $('#signup_section').show();
  });

  $(document).keypress(function(event){
      if(event.keyCode == 13){
          if($('#login_section').is(":visible")){
            $('#btn_login').click();
          }else{
            $('#btn_signup').click();
          }
      }
  });

  $.ajax({
          url: '/checkLoggedOut',
          method: 'POST',
          success: redirect,
          error: function(err){
            return console.log(err);
          }
      });
  function redirect(data){
    if(data == "USER"){
      window.location.href = '/views/portal.html';
    }else if(data == "ADMIN"){
      window.location.href = '/views/admin.html';
    }
  }

	$('#btn_login').click(login);

	function login(){
		const username = $('#login_username').val();
		const password = $('#login_password').val();

		$.ajax({
            url: '/login',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: login_success,
            error: function(err){
                return alertify.notify(err.responseText, 'night', 2, function(){ });
            }
        });
	}

	function login_success(data){
        var user = data[0];
        localStorage.user = JSON.stringify(user);

        if(user.is_admin == 1){
            window.location.href = '/views/admin.html';
        }
        if(user.is_admin == 0){
            window.location.href = '/views/portal.html';
        }

        /*
        window.location.href = 'portal.html';
		*/
	}

  $('#btn_signup').click(signup);

	function signup(){
		const username = $('#signup_username').val();
		const password = $('#signup_password').val();
    const confirmpassword = $('#signup_confirmpassword').val();

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
});
