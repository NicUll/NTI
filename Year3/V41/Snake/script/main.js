
var myGame;
var progressBar;


function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y)
}

function windowResized() {
    centerCanvas();
}



function setup() {
    frameRate(60);
    
    
    cnv = createCanvas(800, 600);

    centerCanvas();

    
    myGame = new Game(800, 600);
    myGame.start();
    //myGame.setupProgressBar();

    fill(255);
    stroke(255);
    textAlign(CENTER, CENTER);
    

}

function keyPressed(){
    myGame.handleInput();
}


function draw() {
    background(0);
    myGame.play();
}
