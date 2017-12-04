


var hourElement = document.getElementById("hours");
//Skapa minut och sekundelement här under


var welcomeElement = document.getElementById("welcome-box");




function updateClock(){
    
    var currentTime = new Date();
    console.log(currentTime.getHours());
    
    
    /*Skriv kod som ska upprepas för att uppdatera klockan*/
    
}


welcomeElement.innerText = "Da Klocka Is:";

setInterval(updateClock, 3000);


