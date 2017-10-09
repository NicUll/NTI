var ball1;
var ball2;
var ball3;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}


function createBalls(){
    ball1 = new Ball(200,200,100,"red");
    ball2 = new Ball(300,150,100,"red");
    ball3 = new Ball(140,400,100,"red");
}

function setup() {
    cnv = createCanvas(800, 600);

    background(0);
    centerCanvas();
    
    stroke(255);
    fill(255);
    
    createBalls();
    ball2.newPosition();
    ball1.newPosition();
    

}

function keyPressed(){

}


function draw() {
    ball1.drawBall();
    ball2.drawBall();
    ball3.drawBall();

}
