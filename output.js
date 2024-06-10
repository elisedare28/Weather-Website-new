var currChart = null;
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('chart').getContext('2d');

  currChart = new Chart (ctx, {
    type : 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Max Temperature',
        }, {
          label: 'Min Temperature',
        }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: '5-Day Weather Forecast Chart'
        },
      },
      
        scales: {
          x: {
            display: true,
            grid: {
              display: false
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Temperature (\u00B0C)'
            },
            grid: {
              display: false
            }
          }

        },
      }      
  });
  document.getElementById('city').textContent = '';
  document.getElementById('temperature').textContent = 'Click on the buttons below';
  document.getElementById('description').textContent = 'or search for a city in the';
  document.getElementById('humidity').textContent = 'search bar above';
});

var btn = document.querySelector('#submit');
var btn1 = document.querySelector('#delhi');
var btn2 = document.querySelector('#london');
var btn3 = document.querySelector('#dc');
var search = document.querySelector('#search');

var temperature = document.querySelector('#temperature');
var humidity = document.querySelector('#humidity');
var description = document.querySelector('#description');
var city = document.querySelector('#city');
var iconurl = document.querySelector('.iconurl');

var main = document.querySelector('#main')
const apikey = "145c59ecfa35998e1021a95af5820eb1";


async function fetchdata(event) {
    event.preventDefault();
    let cityName = '';

    if (event.target === btn) 
      cityName = search.value;
    else if (event.target === btn1) 
      cityName = 'delhi';
    else if (event.target === btn2) 
      cityName = 'london';
    else if (event.target === btn3) 
      cityName = 'washington';
  
    if(cityName) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apikey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        const chartResponse = await fetch(apiUrl);
        const chartData = await chartResponse.json();
        
        weatherDetails(data);
        makeChart(chartData);
        drawIcons(chartData);
      }
      catch (err) {}
    }
    
}

function weatherDetails(data) {
    var name= data.name;
    var descp= data.weather[0].description;
    var temp= data.main.temp;
    var hum = data.main.humidity;
    var img = data.weather[0].icon;

    city.innerHTML=name;
    temperature.innerHTML=`TEMPERATURE: ${Math.round(temp-273)} \u00B0 C`;
    description.innerHTML=`WEATHER: ${descp}`;
    humidity.innerHTML=`HUMIDITY: ${hum}%`;
    iconurl.src = "http://openweathermap.org/img/w/" + img + ".png";
}


function makeChart(chartData) {
  
  const days = chartData['list'];
  const labels = [];
  const maxTemps = [];
  const minTemps = [];

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();

  for(let i = 0 ; i < 5 ; i++)
  {
    labels.push(weekdays[(today + i) % 7]);
    maxTemps.push(days[i].main.temp_max - 273);
    minTemps.push(days[i].main.temp_min - 273);
  }

  labels[0] = `Today`;
  labels[1] = `Tomorrow`;

  const ctx = document.getElementById('chart').getContext('2d');
  
  if(currChart)
      currChart.destroy();

  currChart = new Chart (ctx, {
    type : 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Max Temperature',
        data: maxTemps
        }, {
          label: 'Min Temperature',
          data: minTemps
        }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: '5-Day Weather Forecast Chart'
        },
      },
      
        scales: {
          x: {
            display: true,
            grid: {
              display: false
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Temperature (\u00B0C)'
            },
            grid: {
              display: false
            }
          }

        },
      }      
  });
}

btn.addEventListener('click', fetchdata);
btn1.addEventListener('click', fetchdata);
btn2.addEventListener('click', fetchdata);
btn3.addEventListener('click', fetchdata);