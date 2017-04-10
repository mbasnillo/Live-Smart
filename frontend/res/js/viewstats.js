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
            var score_sex1=[], score_sex2=[];
            var score_educ1=[], score_educ2=[], score_educ3=[], score_educ4=[], score_educ5=[], score_educ6=[], score_educ7=[];
            var score_sal1=[], score_sal2=[], score_sal3=[], score_sal4=[], score_sal5=[], score_sal6=[];
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
                        score_sex1.push(data[i].score);
			}else{
				sex2.push(data[i].sex);
                        score_sex2.push(data[i].score);
			}

                  //For pushing into education
                  if(data[i].education == "none"){
                        education1.push(data[i].education);
                        score_educ1.push(data[i].score);
                  }
                  if(data[i].education == "elementary"){
                        education2.push(data[i].education);
                        score_educ2.push(data[i].score);
                  }
                  if(data[i].education == "highschool"){
                        education3.push(data[i].education);
                        score_educ3.push(data[i].score);
                  }
                  if(data[i].education == "bachelors"){
                        education4.push(data[i].education);
                        score_educ4.push(data[i].score);
                  }
                  if(data[i].education == "masters"){
                        education5.push(data[i].education);
                        score_educ5.push(data[i].score);
                  }
                  if(data[i].education == "doctorate"){
                        education6.push(data[i].education);
                        score_educ6.push(data[i].score);
                  }
                  if(data[i].education == "vocational"){
                        education7.push(data[i].education);
                        score_educ7.push(data[i].score);
                  }


                  //For pushing into salary
                  if(data[i].salary == "none"){
                        salary1.push(data[i].salary);
                        score_sal1.push(data[i].score);
                  }
                  if(data[i].salary == "0-15"){
                        salary2.push(data[i].salary);
                        score_sal2.push(data[i].score);
                  }
                  if(data[i].salary == "15-30"){
                        salary3.push(data[i].salary);
                        score_sal3.push(data[i].score);
                  }
                  if(data[i].salary == "30-45"){
                        salary4.push(data[i].salary);
                        score_sal4.push(data[i].score);
                  }
                  if(data[i].salary == "45-60"){
                        salary5.push(data[i].salary);
                        score_sal5.push(data[i].score);
                  }
                  if(data[i].salary == "60plus"){
                        salary6.push(data[i].salary);
                        score_sal6.push(data[i].score);
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

            //SCORE SEX
            var ave_sex1=0, ave_sex2=0;
            for(var i=0; i<score_sex1.length;i++){
                  ave_sex1 = ave_sex1 + score_sex1[i];
            }
            ave_sex1 = ave_sex1 / score_sex1.length;
            for(var i=0; i<score_sex2.length;i++){
                  ave_sex2 = ave_sex2 + score_sex2[i];
            }
            ave_sex2 = ave_sex2 / score_sex2.length;

            //SCORE EDUCATION
            var ave_educ1=0, ave_educ2=0, ave_educ3=0, ave_educ4=0, ave_educ5=0, ave_educ6=0, ave_educ7=0;
            for(var i=0; i<score_educ1.length; i++){
                  ave_educ1 = ave_educ1 + score_educ1[i];
            }
            ave_educ1 = ave_educ1 / score_educ1.length;
            for(var i=0; i<score_educ2.length; i++){
                  ave_educ2 = ave_educ2 + score_educ2[i];
            }
            ave_educ2 = ave_educ2 / score_educ2.length;
            for(var i=0; i<score_educ3.length; i++){
                  ave_educ3 = ave_educ3 + score_educ3[i];
            }
            ave_educ3 = ave_educ3 / score_educ3.length;
            for(var i=0; i<score_educ4.length; i++){
                  ave_educ4 = ave_educ4 + score_educ4[i];
            }
            ave_educ4 = ave_educ4 / score_educ4.length;
            for(var i=0; i<score_educ5.length; i++){
                  ave_educ5 = ave_educ5 + score_educ5[i];
            }
            ave_educ5 = ave_educ5 / score_educ5.length;
            for(var i=0; i<score_educ6.length; i++){
                  ave_educ6 = ave_educ6 + score_educ6[i];
            }
            ave_educ6 = ave_educ6 / score_educ6.length;
            for(var i=0; i<score_educ7.length; i++){
                  ave_educ7 = ave_educ7 + score_educ7[i];
            }
            ave_educ7 = ave_educ7 / score_educ7.length;

            //SCORE SALARY
            var ave_sal1=0, ave_sal2=0, ave_sal3=0, ave_sal4=0, ave_sal5=0, ave_sal6=0;
            for(var i=0; i<score_sal1.length; i++){
                  ave_sal1 = ave_sal1 + score_sal1[i];
            }
            ave_sal1 = ave_sal1 / score_sal1.length;
            for(var i=0; i<score_sal2.length; i++){
                  ave_sal2 = ave_sal2 + score_sal2[i];
            }
            ave_sal2 = ave_sal2 / score_sal2.length;
            for(var i=0; i<score_sal3.length; i++){
                  ave_sal3 = ave_sal3 + score_sal3[i];
            }
            ave_sal3 = ave_sal3 / score_sal3.length;
            for(var i=0; i<score_sal4.length; i++){
                  ave_sal4 = ave_sal4 + score_sal4[i];
            }
            ave_sal4 = ave_sal4 / score_sal4.length;
            for(var i=0; i<score_sal5.length; i++){
                  ave_sal5 = ave_sal5 + score_sal5[i];
            }
            ave_sal5 = ave_sal5 / score_sal5.length;
            for(var i=0; i<score_sal6.length; i++){
                  ave_sal6 = ave_sal6 + score_sal6[i];
            }
            ave_sal6 = ave_sal6 / score_sal6.length;


            //GRAPHS BEGIN HERE

            //SET COLORS
            /*
		Highcharts.setOptions({
			colors: ['#4CAF50', '#FCDB77', '#F9A556']
		});
            */
            Highcharts.getOptions().plotOptions.pie.colors = (function(){
                  var colors = [];
                  var base = '#4CAF50';
                  var i;

                  for(i = 0; i<10; i++){
                        colors.push(Highcharts.Color(base).brighten((i-3)/9).get());
                  }
                  return colors;
            }());
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
                          enabled: true,
                          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                          style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                          }
                      },
                      showInLegend: false
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
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                            style: {
                                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: false
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
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                            style: {
                                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: false
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
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                            style: {
                                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: false
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
                  text: "Number of people who achieved the following scores"
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
            /*
            $('#score_age').highcharts({
                  title:{
                        text: 'Average Score by Age'
                  },
                  xAxis: {
                        name: 'Score achieved',
                        categories: [
                              'Age group'
                        ],
                        crosshair: true
                  },
                  labels: {
                        items: [{
                              html: 'Number of people by age',
                              style: {
                                    left: '50px',
                                    top: '18px',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                              }
                        }]
                  },
                  series: [{
                        type: 'column',
                        name: '16-18',
                        data: [ave_age1]
                  },
                  {
                        type: 'column',
                        name: '19-21',
                        data: [ave_age2]
                  },
                  {
                        type: 'column',
                        name: '22-24',
                        data: [ave_age3]
                  },
                  {
                        type: 'column',
                        name: '25-27',
                        data: [ave_age4]
                  },
                  {
                        type: 'column',
                        name: '28-30',
                        data: [ave_age5]
                  },
                  {
                        type: 'column',
                        name: '31+',
                        data: [ave_age6]
                  },
                  {
                        type: 'pie',
                        name: 'Age Chuchu',
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
                       }],
                       center: [100, 80],
                       size: 100,
                       showInLegend: false,
                       dataLabels: {
                             enabled: false
                       }
                  }]
            });
            */

            //SCORE SEX GRAPH
            $('#score_sex').highcharts({
                  chart: {
                  backgroundColor: '#FAFAFA',
                  type: 'column'
            },
            title:{
                  text: "Average Score by Sex"
            },
            xAxis: {
                  name: 'Score achieved',
                  categories: [
                        'Sex'
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
                  name: 'Male',
                  data: [ave_sex1]
            },
            {
                  name: 'Female',
                  data: [ave_sex2]
            }]

            });

            //SCORE EDUCATION GRAPH
            $('#score_education').highcharts({
                  chart: {
                  backgroundColor: '#FAFAFA',
                  type: 'column'
            },
            title:{
                  text: "Average Score by Educational Attainment"
            },
            xAxis: {
                  name: 'Educational Attainment',
                  categories: [
                        'Education'
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
                  name: 'No Education',
                  data: [ave_educ1]
            },
            {
                  name: 'Elementary',
                  data: [ave_educ2]
            },
            {
                  name: 'High School',
                  data: [ave_educ3]
            },
            {
                  name: 'Bachelor\'s Degree',
                  data: [ave_educ4]
            },
            {
                  name: 'Master\'s Degree',
                  data: [ave_educ5]
            },
            {
                  name: 'Doctorate',
                  data: [ave_educ6]
            },
            {
                  name: 'Vocational',
                  data: [ave_educ7]
            }]

            });

            //SCORE SALARY GRAPH
            $('#score_salary').highcharts({
                  chart: {
                  backgroundColor: '#FAFAFA',
                  type: 'column'
            },
            title:{
                  text: "Average Score by Monthly Salary"
            },
            xAxis: {
                  name: 'Salary Range',
                  categories: [
                        'Salary'
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
                  name: 'No Salary',
                  data: [ave_sal1]
            },
            {
                  name: 'Less than P15,000',
                  data: [ave_sal2]
            },
            {
                  name: 'P15,001 to P30,000',
                  data: [ave_sal3]
            },
            {
                  name: 'P30,001 to P45,000',
                  data: [ave_sal4]
            },
            {
                  name: 'P45,001 to P60,000',
                  data: [ave_sal5]
            },
            {
                  name: 'Greater than P60,000',
                  data: [ave_sal6]
            }]

            });

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
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                            style: {
                                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: false
                    }
              },
              series: [{
                    name: 'Quantity',
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
