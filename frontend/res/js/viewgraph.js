'use strict';

$(document).ready(function(){
	$.ajax({
          url: '/checkLoggedIn',
          method: 'POST',
          error: function(err){
            window.location.href = '../index.html';
          }
      });

	$('#btn_back').click(function(){
		window.location.href = 'portal.html';
	});

	$.ajax({
		url: '/getCarbonFootprints',
		method: 'GET',
	}).done(function(data){
		var data2=[], i;
		var max = 5;
		if(data.length < max){
			max = data.length;
		}
		for(i=0; i<max; i++){
			var temp=[];
			var date = Date.parse(data[i].carbon_date);
			temp.push(date);
			temp.push(data[i].carbon_level);
			data2.push(temp);
		}

		const username = data[0].username;
		const title_text = "Carbon Footprints for " + username;

		Highcharts.setOptions({
			colors: ['#2C3539', '#CD4545']
		});
		$('#carbon_graph').highcharts({
			chart: {
				type: 'line'
			},
			title: {
				text: ""
			},
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e. %b %y'
				},
				title: {
					text: 'Date'
				}
			},
			yAxis: {
				title: {
					text: 'Carbon Footprint Level',
				},
				min: 0,
				max: 10,
				tickInterval: 1
			},
			tooltip: {
				headerFormat: '{point.x:%e. %b %Y}<br/>',
				pointFormat:'<b>Computed Level:</b> {point.y}'
			},
			plotOptions: {
				spline: {
					marker: {
						enabled: true
					}
				}
			},

			series: [{
				name: username + "'s scores over time.",
				data: data2
			}]



		});
	});

});
