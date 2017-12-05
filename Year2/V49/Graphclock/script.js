const second = 1;
const minute = 60;
const hour = 3600;

var currentTime = new Date();
var hourElement = document.getElementById("hour-hand");
//Skapa minut och sekundelement här under
var minuteElement = document.getElementById("minute-hand");
var secondElement = document.getElementById("second-hand");

var secondHand = new ClockHand(currentTime.getSeconds(),second);
var minuteHand = new ClockHand(currentTime.getMinutes(),minute);
var hourHand = new ClockHand(currentTime.getHours(),hour);


function ClockHand(startRotation, type){
    this.rotation = startRotation;
    this.divider = type;
    
    this.step = function(){
        this.rotation += (1/(60*this.divider))*360;
    }
}

function updateClockElement(element, hand){
    element.style.transform = "translate(-50%,0) rotate(" + hand.rotation + "deg)";
}




function updateClock(){
    currentTime = new Date();
    
    secondHand.step();
    minuteHand.step();
    hourHand.step();
    
    updateClockElement(secondElement, secondHand);
    updateClockElement(minuteElement, minuteHand);
    updateClockElement(hourElement, hourHand);
    
}



setInterval(updateClock, 1000);


