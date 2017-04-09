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
					url: '/getStatistics',
					method: 'GET',
	}).done(function(data){
		var age1=[], age2=[], age3=[], age4=[], age5=[], age6=[], age=[];
		var sex1=[], sex2=[];
		var education1=[], education2=[], education3=[], education4=[], education5=[], education6=[], education7=[];
            var salary1=[], salary2=[], salary3=[], salary4=[], salary5=[], salary6=[];
            var score0=[], score1=[], score2=[], score3=[], score4=[], score5=[], score6=[], score7=[];
            var score8=[], score9=[], score10=[], score11=[], score12=[], score13=[], score14=[], score15=[];
            var score_age1=[], score_age2=[], score_age3=[], score_age4=[], score_age5=[], score_age6=[];
            var perception1=[], perception2=[], perception3=[], perception4=[], perception5=[];
		for(var i=0; i<data.length; i++){

			//For pushing into age
			if(data[i].age >= 16 && data[i].age <= 18){
				age1.push(data[i].age);
                        score_age1.push(data[i].score);
			}
			if(data[i].age >= 19 && data[i].age <= 21){
				age2.push(data[i].age);
                        score_age2.push(data[i].score);
			}
			if(data[i].age >= 22 && data[i].age <= 24){
				age3.push(data[i].age);
                        score_age3.push(data[i].score);
			}
			if(data[i].age >= 25 && data[i].age <= 27){
				age4.push(data[i].age);
                        score_age4.push(data[i].score);
			}
			if(data[i].age >= 28 && data[i].age <= 30){
				age5.push(data[i].age);
                        score_age5.push(data[i].score);
			}
			if(data[i].age >= 31){
				age6.push(data[i].age);
                        score_age6.push(data[i].score);
			}

			//For pushing into sex
			if(data[i].sex == "male"){
				sex1.push(data[i].sex);
			}else{
				sex2.push(data[i].sex);
			}

                  //For pushing into education
                  if(data[i].education == "none"){
                        education1.push(data[i].education);
                  }
                  if(data[i].education == "elementary"){
                        education2.push(data[i].education);
                  }
                  if(data[i].education == "highschool"){
                        education3.push(data[i].education);
                  }
                  if(data[i].education == "bachelors"){
                        education4.push(data[i].education);
                  }
                  if(data[i].education == "masters"){
                        education5.push(data[i].education);
                  }
                  if(data[i].education == "doctorate"){
                        education6.push(data[i].education);
                  }
                  if(data[i].education == "vocational"){
                        education7.push(data[i].education);
                  }


                  //For pushing into salary
                  if(data[i].salary == "none"){
                        salary1.push(data[i].salary);
                  }
                  if(data[i].salary == "0-15"){
                        salary2.push(data[i].salary);
                  }
                  if(data[i].salary == "15-30"){
                        salary3.push(data[i].salary);
                  }
                  if(data[i].salary == "30-45"){
                        salary4.push(data[i].salary);
                  }
                  if(data[i].salary == "45-60"){
                        salary5.push(data[i].salary);
                  }
                  if(data[i].salary == "60plus"){
                        salary6.push(data[i].salary);
                  }

                  if(data[i].score == "0"){
                        score0.push(data[i].score);
                  }
                  if(data[i].score == "1"){
                        score1.push(data[i].score);
                  }
                  if(data[i].score == "2"){
                        score2.push(data[i].score);
                  }
                  if(data[i].score == "3"){
                        score3.push(data[i].score);
                  }
                  if(data[i].score == "4"){
                        score4.push(data[i].score);
                  }
                  if(data[i].score == "5"){
                        score5.push(data[i].score);
                  }
                  if(data[i].score == "6"){
                        score6.push(data[i].score);
                  }
                  if(data[i].score == "7"){
                        score7.push(data[i].score);
                  }
                  if(data[i].score == "8"){
                        score8.push(data[i].score);
                  }
                  if(data[i].score == "9"){
                        score9.push(data[i].score);
                  }
                  if(data[i].score == "10"){
                        score10.push(data[i].score);
                  }
                  if(data[i].score == "11"){
                        score11.push(data[i].score);
                  }
                  if(data[i].score == "12"){
                        score12.push(data[i].score);
                  }
                  if(data[i].score == "13"){
                        score13.push(data[i].score);
                  }
                  if(data[i].score == "14"){
                        score14.push(data[i].score);
                  }
                  if(data[i].score == "15"){
                        score15.push(data[i].score);
                  }

                  if(data[i].perception == "1"){
                        perception1.push(data[i].perception);
                  }
                  if(data[i].perception == "2"){
                        perception2.push(data[i].perception);
                  }
                  if(data[i].perception == "3"){
                        perception3.push(data[i].perception);
                  }
                  if(data[i].perception == "4"){
                        perception4.push(data[i].perception);
                  }
                  if(data[i].perception == "5"){
                        perception5.push(data[i].perception);
                  }


			//var temp_education=[];
			//var temp_salary=[];
		}

            //SCORE COMPUTATIONS
            //SCORE AGE
            var ave_age1=0, ave_age2=0, ave_age3=0, ave_age4=0, ave_age5=0, ave_age6=0;
            for(var i=0; i<score_age1.length; i++){
                  ave_age1 = ave_age1 + score_age1[i];
            }
            ave_age1 = ave_age1 / score_age1.length;
            for(var i=0; i<score_age2.length; i++){
                  ave_age2 = ave_age2 + score_age2[i];
            }
            ave_age2 = ave_age2 / score_age2.length;
            for(var i=0; i<score_age3.length; i++){
                  ave_age3 = ave_age3 + score_age3[i];
            }
            ave_age3 = ave_age3 / score_age3.length;
            for(var i=0; i<score_age4.length; i++){
                  ave_age4 = ave_age4 + score_age4[i];
            }
            ave_age4 = ave_age4 / score_age4.length;
            for(var i=0; i<score_age5.length; i++){
                  ave_age5 = ave_age5 + score_age5[i];
            }
            ave_age5 = ave_age5 / score_age5.length;
            for(var i=0; i<score_age6.length; i++){
                  ave_age6 = ave_age6 + score_age6[i];
            }
            ave_age6 = ave_age6 / score_age6.length;

		Highcharts.setOptions({
			colors: ['#4CAF50', '#FCDB77', '#F9A556']
		});
            //AGE GRAPH
		$('#age_graph').highcharts({
			chart: {
                  backgroundColor: '#FAFAFA',
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'Age'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                    name: 'Quantity',
                    colorByPoint: true,
                    data: [{
                          name: '16-18',
                          y: age1.length
                    }, {
                          name: '19-21',
                          y: age2.length
                    }, {
                          name: '22-24',
                          y: age3.length
                    }, {
                          name: '25-27',
                          y: age4.length
                    }, {
                          name: '28-30',
                          y: age5.length
                    }, {
                          name: '31+',
                          y: age6.length
                    }]
              }]

		});

            //SEX GRAPH
            $('#sex_graph').highcharts({
			chart: {
                  backgroundColor: '#FAFAFA',
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'Sex'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                  name: 'Quantity',
                  colorByPoint: true,
                  data: [{
                      name: 'Male',
                      y: sex1.length
                  }, {
                      name: 'Female',
                      y: sex2.length
                  }]
              }]
		});

            //EDUCATION GRAPH
		$('#education_graph').highcharts({
			chart: {
                  backgroundColor: '#FAFAFA',
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'Educational Attainment'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                  name: 'Quantity',
                  colorByPoint: true,
                  data: [{
                        name: 'None',
                        y: education1.length
                  }, {
                        name: 'Elementary',
                        y: education2.length
                  }, {
                        name: 'High School',
                        y: education3.length
                  }, {
                        name: 'Bachelor\'s Degree',
                        y: education4.length
                  }, {
                        name: 'Master\'s Degree',
                        y: education5.length
                  }, {
                        name: 'Doctorate',
                        y: education6.length
                  }, {
                        name: 'Vocational',
                        y: education7.length
                  }]
              }]
		});

            //SALARY GRAPH
		$('#salary_graph').highcharts({
			chart: {
                  backgroundColor: '#FAFAFA',
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'Monthly Salary'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                  name: 'Quantity',
                  colorByPoint: true,
                  data: [{
                      name: 'None',
                      y: salary1.length
                  }, {
                      name: 'Less than P15,000',
                      y: salary2.length
                  }, {
                      name: 'P15,001 to P30,000',
                      y: salary3.length
                  }, {
                      name: 'P30,001 to P45,000',
                      y: salary4.length
                  }, {
                      name: 'P45,001 to P60,000',
                      y: salary5.length
                  }, {
                      name: 'Greater than P60,000',
                      y: salary6.length
                  }]
              }]
		});

            //SCORE OVERALL GRAPH
            $('#score_overall').highcharts({
                  chart: {
                  backgroundColor: '#FAFAFA',
                  type: 'column'
            },
            title:{
                  text: "Scores"
            },
            xAxis: {
                  name: 'Score achieved',
                  categories: [
                        'Score achieved'
                  ],
                  crosshair: true
            },
            yAxis: {
                  min: 0,
                  tickInterval: 1,
                  title: {
                        text: 'Number of people'
                  }
            },
            series: [{
                  name: '0',
                  data: [score0.length]
            },
            {
                  name: '1',
                  data: [score1.length]
            },
            {
                  name: '2',
                  data: [score2.length]
            },
            {
                  name: '3',
                  data: [score3.length]
            },
            {
                  name: '4',
                  data: [score4.length]
            },
            {
                  name: '5',
                  data: [score5.length]
            },
            {
                  name: '6',
                  data: [score6.length]
            },
            {
                  name: '7',
                  data: [score7.length]
            },
            {
                  name: '8',
                  data: [score8.length]
            },
            {
                  name: '9',
                  data: [score9.length]
            },
            {
                  name: '10',
                  data: [score10.length]
            },
            {
                  name: '11',
                  data: [score11.length]
            },
            {
                  name: '12',
                  data: [score12.length]
            },
            {
                  name: '13',
                  data: [score13.length]
            },
            {
                  name: '14',
                  data: [score14.length]
            },
            {
                  name: '15',
                  data: [score15.length]
            }]

            });

            //SCORE AGE GRAPH
            $('#score_age').highcharts({
                  chart: {
                  backgroundColor: '#FAFAFA',
                  type: 'column'
            },
            title:{
                  text: "Average Score by Age"
            },
            xAxis: {
                  name: 'Score achieved',
                  categories: [
                        'Age group'
                  ],
                  crosshair: true
            },
            yAxis: {
                  min: 0,
                  max: 15,
                  tickInterval: 1,
                  title: {
                        text: 'Average score'
                  }
            },
            series: [{
                  name: '16-18',
                  data: [ave_age1]
            },
            {
                  name: '19-21',
                  data: [ave_age2]
            },
            {
                  name: '22-24',
                  data: [ave_age3]
            },
            {
                  name: '25-27',
                  data: [ave_age4]
            },
            {
                  name: '28-30',
                  data: [ave_age5]
            },
            {
                  name: '31+',
                  data: [ave_age6]
            }]

            });

            Highcharts.setOptions({
			colors: ['#4CAF50', '#FCDB77', '#F9A556']
		})
            //PERCEPTION GRAPH
            $('#perception_graph').highcharts({
                  chart: {
                  backgroundColor: '#FAFAFA',
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'People\'s perception on climate change'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                    name: 'perception',
                    colorByPoint: true,
                    data: [{
                          name: 'It doesn\'t affect me at all',
                          y: perception1.length
                    }, {
                          name: 'It affects me somehow',
                          y: perception2.length
                    }, {
                          name: 'It must be solved, but by experts',
                          y: perception3.length
                    }, {
                          name: 'It must be solved, and I would help if I knew how',
                          y: perception4.length
                    }, {
                          name: 'I can help address climate change!',
                          y: perception5.length
                    }]
              }]
            });
      });// END OF DONE FUNCTION



	$('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});


});
