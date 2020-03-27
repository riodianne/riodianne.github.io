var d = new Date();
// console.log(d.getDay());

var currentday=d.getDay();

// currentday=5;
    if (currentday!=5) {
        document.getElementById("fridaycheck").style.display = "none";
    }