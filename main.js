// const BASE_URL = "https://zagster-service.herokuapp.com"

// $(updateGraph)
// $(updateView)
// function updateView() {
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
// }

// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h2#rideCount").html(numberOfRides)
//   alert(numberOfRides);
//   console.log(numberOfRides);
// }
// function updateGraph() {
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });
// }
// $(updateView)

// let years = []
// let months2016 = []
// let months2017 = []
// let months2018 = []


// function updateView() { 
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
//   $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
//   ).then(updateChart);
// }

// function perYear(data) {

//   for (varindex = 0, month=9, index<= 3, month<=12; ++index, ++month){
//     months2016.push(data[2016] [index] [month])
//   }
//   console.log("2016 data by months is easy" + months2016)

//   for (varindex = 0, month=1, index<= 11, month<=12; ++index, ++month){
//     months2017.push(data[2017] [index] [month])
//   }
//   console.log("2017 data by months is easy" + months2016)

//   for (varindex = 0, month=1, index<= data.length, month<=12; ++index, ++month){
//     months2018.push(data[2018] [index] [month])
//   }
//   console.log("2018 data by months is easy" + months2018)
}