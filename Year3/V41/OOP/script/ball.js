

function Ball(xPos, yPos, radius, color){
    // Skapa boll -> O 
    // Den bollen är "this"
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius; // O.radius = radius som vi skickar in
    this.color = color; //  O.color = color som vi skickar in
    
    
    // printColor är också en variabel
    // men den håller en funktion
    
    this.drawBall = function(){
        ellipse(this.xPos, this.yPos, this.radius);
    }
    
    this.newPosition = function(){
        this.xPos = Math.random() * width;
        this.yPos = Math.random() * height;
    }
    
}

