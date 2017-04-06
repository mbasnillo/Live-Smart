'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

	$(document).keypress(function(event){
      if(event.keyCode == 13){
          $('#btn_delete').click();
      }
  });

	$('#btn_delete').click(deleteUser);

	function deleteUser(){
		const username = $('#username').val();
		const confirmusername = $('#confirmusername').val();

    $.ajax({
        url: '/deleteUser',
        method: 'DELETE',
        data: {
            username: username,
            confirmusername : confirmusername
        },
        dataType: 'json',
        success: function(data){
          delete_success(data);
        },
        error: function(err){
          return alertify.notify(err.responseText, 'night', 2, function(){ });
        }
    });
	}

  function delete_success(data){
    alertify.notify(data.responseText, 'night', 2, function(){
      location.reload();
    });
  }

  $('#btn_back').click(goback);

  function goback(){
      window.location.href = 'admin.html';
  }
});
