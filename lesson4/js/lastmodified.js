var d = new Date(document.lastModified);

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let oLastModif = days[d.getDay()] + ", " + d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear();
document.getElementById("lastModified").innerHTML="Last Updated: " + oLastModif;