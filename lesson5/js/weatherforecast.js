var dd = new Date();
// console.log(d.getDay());

var dcurrentday=dd.getDay();

var daycheck = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");


var label=document.getElementsByClassName('label');


//dcurrentday =0; //this is for test
//get currrent day
//loop to 5 day forecast
//if the current day exceed to 6 it goes to 1 which is sunday

for(var x=0; x<5; x++){

    if(dcurrentday<=6){
        console.log(daycheck[dcurrentday]);
       label[x].innerHTML=daycheck[dcurrentday];
        dcurrentday++;
    }
    else{
        dcurrentday=0;
        console.log(daycheck[dcurrentday]);
        label[x].innerHTML=daycheck[dcurrentday];
        dcurrentday++;
    }
    

}