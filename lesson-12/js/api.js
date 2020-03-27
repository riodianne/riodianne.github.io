//5604473 - preston
 //5585010 - Fish Haven
 //5607916 - Soda Spring
 let sitetitle2=document.title;

 var requestURL;

 if(sitetitle2.includes("Preston")){
 requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1ffe6f1bfc0776315c26330bb20381ff';
  }
  else if(sitetitle2.includes("Soda Springs")){
  requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=1ffe6f1bfc0776315c26330bb20381ff';
  }
  else{
    requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=1ffe6f1bfc0776315c26330bb20381ff';
  
  }




fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

  // (0K − 273.15) × 9/5 + 32 = -459.7°F
  let temp=(jsonObject.main.temp - 273.15) * 9/5 + 32;
  

  document.getElementById('high').innerHTML = temp.toFixed(2) + "&#8457;";
  document.getElementById('humidity').innerHTML = jsonObject.main.humidity + "%";
  document.getElementById('currentcondition').innerHTML = jsonObject.weather[0].main;
  document.getElementById('windspeed').innerHTML = jsonObject.wind.speed + "mph";



  var f;
var t=temp;
var s=jsonObject.wind.speed;


//Wind Chill Temperature is officially defined for temperatures at or
// below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph).

if(t<=50 && s>=3){
//f= 35.74 + 0.6215t - 35.75 s 0.16 + 0.4275t s 0.16
f=35.74+0.6215*t-35.75*Math.pow(s,0.16) + 0.4275*t*Math.pow(s,0.16);
f=Math.round(f*100)/100;
document.getElementById("windchill").innerHTML=f;
}

else{
    document.getElementById("windchill").innerHTML="N/A";
}



      });