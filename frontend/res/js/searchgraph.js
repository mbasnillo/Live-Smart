'use strict';

$(document).ready(function(){
	alertify.set('notifier','position', 'top-right');
	$('#graph_area').hide();

	$('#search_user').keyup(function(event){
		if(event.keyCode == 13){
			$("#btn_search").click();
		}
	});

	$('#btn_search').click(function(){
		const username = $('#search_user').val();
		const title_text = "Carbon Footprints for " + username;
		$.ajax({
			url: '/getUserGraph',
			method: 'POST',
			data:  {
				username: username
			},
			success: function(data){
				console.log(data);
				$('#graph_area').show();
				var data2=[], i;
				for(i=0; i<data.length; i++){
					var temp=[];
					var date = Date.parse(data[i].carbon_date);
					temp.push(date);
					temp.push(data[i].carbon_level);
					data2.push(temp);
				}

				Highcharts.setOptions({
					colors: ['#2C3539', '#CD4545']
				});
				//$('#graph_area').highcharts({
				var chart = new Highcharts.Chart({
					chart: {
						type: 'line',
						renderTo: 'graph_area'
					},
					title: {
						text: title_text
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
						min: 0
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
			},
			error: function(err){
				$('#graph_area').hide();
				return alertify.notify(err.responseText, 'night', 2, function(){ });
			}
		});/*.done(function(data){

			console.log(data);
			var data2=[], i;
			for(i=0; i<data.length; i++){
				var temp=[];
				var date = Date.parse(data[i].carbon_date);
				temp.push(date);
				temp.push(data[i].carbon_level);
				data2.push(temp);
			}

			Highcharts.setOptions({
				colors: ['#2C3539', '#CD4545']
			});
			//$('#graph_area').highcharts({
			var chart = new Highcharts.Chart({
				chart: {
					type: 'line',
					renderTo: 'graph_area'
				},
				title: {
					text: title_text
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
					min: 0
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
		});*/
	});

	$('#btn_back').click(function(){
		window.location.href = 'admin.html';
	});


});
