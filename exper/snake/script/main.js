const BG_COLOR = 0;
const ST_COLOR = 255;
const FI_COLOR = 255;
var game;

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
    

    
    game = new Game(20,0,false);
    game = new Game(1,0,true);
    game.snakeEat();
    game.snakeEat();

    game.snakeEat();
    game.snakeEat();
    game.snakeEat();

}

function keyPressed(){
    
    game.turnSnake(keyCode);
}


function draw() {
    game.update();
}
