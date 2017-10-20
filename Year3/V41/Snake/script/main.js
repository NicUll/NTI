
var myGame;
var directions = {[LEFT_ARROW]:[-1,0], [UP_ARROW]:[0,-1]};


function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2
    cnv.position(x, y)
}

function windowResized() {
    centerCanvas();
}



function setup() {
    frameRate(20);
    
    cnv = createCanvas(800, 600);

    background(0);
    centerCanvas();
<<<<<<< HEAD
    /*
    myGame = new Game();
    
    myGame.start();
    */
=======
    
    myGame = new Game(800, 600);
    myGame.start();

    
>>>>>>> master
    fill(255);
    stroke(255);
    
    
    
    

}

function keyPressed(){
    //myGame.handleInput();
    console.log(keyCode);
    console.log(directions);
    if(String(keyCode) in directions){
        console.log(directions[keyCode]);
    }

}


function draw() {
    background(0);
    //myGame.play();
}
