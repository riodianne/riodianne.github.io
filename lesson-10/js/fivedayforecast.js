const fivedayforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1ffe6f1bfc0776315c26330bb20381ff';

fetch(fivedayforecast)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonforecast) {
    console.table(jsonforecast);  // temporary checking for valid response and data parsing

var fiveforecast=1;
for (let i=0; i<=jsonforecast.list.length-1; i++){
    if(jsonforecast.list[i].dt_txt.includes("18:00:00"))  {
        let temp=(jsonforecast.list[i].main.temp - 273.15) * 9/5 + 32;

        document.getElementById(`forecast${fiveforecast}`).innerHTML = temp.toFixed(2) + "&#8457;";
        document.getElementById(`forecastlogo${fiveforecast}`).setAttribute('src', `https://openweathermap.org/img/wn/${jsonforecast.list[i].weather[0].icon}@2x.png`);
        document.getElementById(`forecastlogo${fiveforecast}`).setAttribute('alt', `${jsonforecast.list[i].weather[0].description}`);
        fiveforecast++;
    }
} 



      });