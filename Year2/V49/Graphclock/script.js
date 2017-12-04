const second = 1;
const minute = 60;
const hour = 3600;


var hourElement = document.getElementById("hour-hand");
//Skapa minut och sekundelement här under
var minuteElement = document.getElementById("minute-hand");
var secondElement = document.getElementById("second-hand");

var secondHand = new ClockHand(0,second);


function ClockHand(startRotation, type){
    this.rotation = startRotation;
    this.divider = type;
    
    this.step = function(){
        this.rotation += (1/(60*this.divider))*360;
    }
}

function updateClockElements(element, hand){
    element.style.transform = "translate(-50%,0) rotate(" + hand.rotation + "deg)";
}




function updateClock(){
    var currentTime = new Date();
    
    secondHand.step();
    updateClockElements(secondElement, secondHand);
    
}



setInterval(updateClock, 1000);


