

var f;
var t=parseInt(document.getElementById("high").innerText);
var s=parseInt(document.getElementById("windspeed").innerText);


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