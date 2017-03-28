'use strict';

$(document).ready(function(){

	$('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});

	$.ajax({
		url: '/getCarbonFootprints',
		method: 'GET',
	}).done(function(data){
		var data2=[], i;
		console.log(data); // REMOVE LATER
		for(i=0; i<data.length; i++){
			var temp=[];
			temp.push(data[i].carbon_date);
			temp.push(data[i].carbon_level);
			data2.push(temp);
		}

		const username = data[0].username;
		const title_text = "Carbon Footprints for " + username;
		$('#carbongraph').highcharts({
			chart: {
				type: 'spline'
			},
			title: {
				text: title_text
			},
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					month: '%e. %b',
					year: '%b'
				},
				title: {
					text: 'Date'
				}
			},
			yAxis: {
				title: {
					text: 'Carbon Footprint Level',
				},
				min: 0
			},
			tooltip: {

			},
			plotOptions: {

			},

			series: [{
				name: username + "'s scores over time.",
				data: data2
			}]



		});
	});

});
