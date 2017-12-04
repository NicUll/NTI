


var hourElement = document.getElementById("hours");
//Skapa minut och sekundelement här under
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");





function withLeadingZero(time){
    var first = "";
    if((time).toString().length < 2){
        first = "0";
    }
    return first + time;
}


function updateClock(){
    
    var currentTime = new Date();
    
    hourElement.textContent = withLeadingZero(currentTime.getHours());
    minuteElement.textContent = withLeadingZero(currentTime.getMinutes());
    secondElement.textContent = withLeadingZero(currentTime.getSeconds());
    
    
}



setInterval(updateClock, 1000);


