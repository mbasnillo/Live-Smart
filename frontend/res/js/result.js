'use strict';

$(document).ready(function(){
  $.ajax({
      url: '/checkLoggedIn',
      method: 'POST',
      error: function(err){
        window.location.href = '../index.html';
      }
  });

  $.ajax({
    url: '/getLatestScore',
    method: 'GET',
    error: function(err){
      return console.log(err);
    }
  }).done(function(data){
    var food_score = data[0].food_score;
    var travel_score = data[0].travel_score;
    var home_score = data[0].home_score;
    var carbon_level = data[0].carbon_level;
    $('#score').html(carbon_level);
    if(carbon_level > 0 && carbon_level <= 3){
      $('#evaluation').html("Seems like you're doing a great job at helping the environment. Keep it up!");
    }else if(carbon_level > 3 && carbon_level <= 5){
      $('#evaluation').html("Seems like you've been doing a decent job, though you could use some work in some areas.");
    }else if(carbon_level > 5 && carbon_level <= 8){
      $('#evaluation').html("Seems like you've got some work to do to lessen your carbon emissions. Why not take a look at our guides?");
    }else{
      $('#evaluation').html("Seems like you've got a lot of work to do to contribute to helping the environment. Refer to our guides to learn how to reduce your carbon emissions.");
    }

    if(food_score == travel_score && food_score == home_score){
      $('#suggestion').html("Try looking into your travel habits and start making changes there.");
      $('#link').html("<a href='http://shrinkthatfootprint.com/shrink-your-travel-footprint'>Check out this link for more details!</a>");
    }else{
      if(food_score > travel_score){
        if(food_score > home_score){
          //food is highest
          $('#suggestion').html("Maybe you can start looking into adding some changes to your food intake.");
          $('#link').html("<a href='http://shrinkthatfootprint.com/shrink-your-food-footprint'>Check out this link for more details!</a>");
        }else{
          //home is highest
          $('#suggestion').html("Is your house too big or do you own way too many gadgets? Maybe you can start by turning off unused appliances.");
          $('#link').html("<a href='http://shrinkthatfootprint.com/shrink-your-housing-footprint'>Check out this link for more details!</a>");
        }
      }else{
        if(travel_score > home_score){
          //travel is highest
          $('#suggestion').html("Try looking into your travel habits and start making changes there.");
          $('#link').html("<a href='http://shrinkthatfootprint.com/shrink-your-travel-footprint'>Check out this link for more details!</a>");
        }else{
          //home is highest
          $('#suggestion').html("Is your house too big or do you own way too many gadgets? Maybe you can start by turning off unused appliances.");
          $('#link').html("<a href='http://shrinkthatfootprint.com/shrink-your-housing-footprint'>Check out this link for more details!</a>");
        }
      }
    }
  });

  $('#btn_back').click(function(){
		window.location.href = 'portal.html';
	});
});
