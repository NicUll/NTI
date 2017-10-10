

function Ball(xPos, yPos, radius, colorIn){
    // Skapa boll -> O 
    // Den bollen är "this"
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius; // O.radius = radius som vi skickar in
    this.color = colorIn; //  O.color = color som vi skickar in
    
    
    // printColor är också en variabel
    // men den håller en funktion
    
    this.drawBall = function(){
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.radius);
    }
    
    this.newPosition = function(){
        this.xPos = Math.random() * width;
        this.yPos = Math.random() * height;
    }
    
    this.randomSize = function(){
        this.radius = Math.random() * 200;
    }
    
    this.randomColor = function(){
        this.color = color(Math.random()*255,Math.random()*255,Math.random()*255);
    }
    
    this.changeAll = function(){
        this.newPosition();
        this.randomSize();
        this.randomColor();
    }
    
}

