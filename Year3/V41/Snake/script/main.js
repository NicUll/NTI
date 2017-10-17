
var myGame;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2
    cnv.position(x, y)
}

function windowResized() {
    centerCanvas();
}



function setup() {
    cnv = createCanvas(800, 600);

    background(0);
    centerCanvas();
    
    myGame = new Game();
    myGame.generatePlayField(800, 600);
    
    myGame.start();
    myGame.playField.snake.eat()
    myGame.playField.snake.eat()
    myGame.playField.snake.eat()
    
    fill(255);
    stroke(255);
    

}

function keyPressed(){
    myGame.handleInput();

}


function draw() {
    background(0);
    myGame.play();
    
}
