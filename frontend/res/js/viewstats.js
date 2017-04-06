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
		for(var i=0; i<data.length; i++){

			//For pushing into age
			if(data[i].age >= 16 && data[i].age <= 18){
				age1.push(data[i].age);
			}
			if(data[i].age >= 19 && data[i].age <= 21){
				age2.push(data[i].age);
			}
			if(data[i].age >= 22 && data[i].age <= 24){
				age3.push(data[i].age);
			}
			if(data[i].age >= 25 && data[i].age <= 27){
				age4.push(data[i].age);
			}
			if(data[i].age >= 28 && data[i].age <= 30){
				age5.push(data[i].age);
			}
			if(data[i].age >= 31){
				age6.push(data[i].age);
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

			var temp_education=[];
			var temp_salary=[];
		}

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
	});

	$('#btn_back').click(function(){
		window.location.href = '../portal.html';
	});


});
