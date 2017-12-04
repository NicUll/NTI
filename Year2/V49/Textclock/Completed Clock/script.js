


var hourElement = document.getElementById("hours");
//Skapa minut och sekundelement här under
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");








function updateClock(){
    
    var currentTime = new Date();
    
    hourElement.textContent = currentTime.getHours();
    minuteElement.textContent = currentTime.getMinutes();
    secondElement.textContent = currentTime.getSeconds();
    
    
}



setInterval(updateClock, 1000);


