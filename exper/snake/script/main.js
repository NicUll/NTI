const BG_COLOR = 0;
const ST_COLOR = 255;
const FI_COLOR = 255;
var game;
var fontSize;
var touchX;
var touchY;
const HOR_MOV = 0;
const VER_MOV = 1;
var movement;


function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2
    cnv.position(x, y)
}

function windowResized() {
    centerCanvas();
}



function setup() {
    var gameWidth = 800;
    var gameHeight = 640;
    fontSize = 20;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        gameWidth = windowWidth;
        gameHeight = windowHeight;
        fontSize = 22;
        fullscreen();
    }
    cnv = createCanvas(gameWidth, gameHeight);

    background(0);
    centerCanvas();

    game = new Game(1, 0, false);
    game.snakeEat();
    game.snakeEat();
    game.snakeEat();

}

function touchStarted() {
    touchX = null;
    touchY = null;
    if (touches.length == 1) {
        touchX = touches[0].x
        touchY = touches[0].y
    }
}

function touchMoved() {
    var movX = 0;
    var movY = 0;
    if (touchX != null) {
        var tempX = touches[0].x;
        var tempY = touches[0].y;
        movX = tempX - touchX;
        movY = tempY - touchY;
        touchX = tempX;
        touchY = tempY;
        console.log(movement);
        if (Math.abs(movX) > 100 || Math.abs(movY) > 100) {
            if (Math.abs(movX > movY)) {
                movement = movX > 0 ? 2 : 1;
            } else {
                movement = movY > 0 ? 3 : 0;
            }
            game.handleInput(movement, MOBILE);
        }
    }

}


function keyPressed() {

    game.handleInput(keyCode, DESKTOP);
}


function draw() {
    game.update();
}
