const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1ffe6f1bfc0776315c26330bb20381ff';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  // (0K − 273.15) × 9/5 + 32 = -459.7°F
  let temp=(jsonObject.main.temp - 273.15) * 9/5 + 32;
  

  document.getElementById('current-temp').textContent = temp.toFixed(2);

  const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsonObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);

      });