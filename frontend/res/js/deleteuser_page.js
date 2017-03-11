'use strict';

$(document).ready(function(){
	$('#btn_delete').click(deleteUser);

	function deleteUser(){
		const username = $('#username').val();
		const confirmusername = $('#confirmusername').val();

		if(username == confirmusername){
            $.ajax({
                url: '/deleteUser',
                method: 'DELETE',
                data: {
                    username: username
                },
                dataType: 'json',
                success: delete_success,
                error: function(err){
                    return console.log(err, "Signup error");
                }
            });
        }else{
            return console.log("Usernames do not match!");
        }
	}

	function delete_success(){
		window.location.href = 'deleteuser.html';
	}

    $('#btn_back').click(goback);

    function goback(){
        window.location.href = 'admin.html';
    }
});
