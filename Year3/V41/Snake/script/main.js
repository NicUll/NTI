
var myGame;
var progressBar;


function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y)
}

function placeHighScore(){
    var highScore = select('#highscore');

    highScore.style("position", cnv.position().x, cnv.position().y + cnv.height);
    console.log(cnv.position().x);
}

function windowResized() {
    centerCanvas();
}



function setup() {
    frameRate(60);
    
    
    cnv = createCanvas(800, 600);

    centerCanvas();
    placeHighScore();

    
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
