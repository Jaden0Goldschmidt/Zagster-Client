const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

var my_data = []
var data_points = []

function updateView() {
  
    $.when ($.getJSON(BASE_URL + "/rides/count/grc/per_month", perYear), 
      ).then(updateChart);
  }

function perYear(data) {

    var data2016 = data[2016]  
    var data2017 = data[2017] 
    var data2018 = data[2018] 
    
    for(let i = 0; i < data2016.length; i++){
        my_data.push(data2016[i][i+9])
    }   

    function add_data(data) {
        for(let i = 0; i < data.length; i++){
            if (data[i] !== void 0) {
                my_data.push(data[i][i+1])
            }   
        }
        return my_data;
    }
    add_data(data2017)
    add_data(data2018)
    
  }
  console.log(my_data)

function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
       
        type: 'line',

        data: {
            labels: ["SEP2016","OCT2016","NOV2016","DEC2016", "JAN2017", "FEB2017", "MAR2017","APR2017","MAY2017","JUN2017","JUL2017","AUG2017","SEP2017","OCT2017","NOV2017", "JAN2018", "FEB2018", "MAR2018","APR2018","MAY2018","JUN2018","JUL2018","AUG2018","SEP2018","OCT2018"],

            datasets: [{
                label: 'Zagster Number of Rides from the GRC Per Month in 2016, 2017, and 2018',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                
                data: my_data 
            }]
        },

        // Configuration options go here
        options: {}
    });
}