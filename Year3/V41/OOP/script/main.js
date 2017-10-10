var ballContainer1;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}


function createBalls(){
    var ball1 = new Ball(200,200,100,"red");
    var ball2 = new Ball(300,150,100,"blue");
    var ball3 = new Ball(140,400,100,"yellow");
    var ball4 = new Ball(40, 40, 150,"pink");
    
    ballContainer1 = new BallContainer();
    
    ballContainer1.addBall(ball1);
    ballContainer1.addBall(ball2);
    ballContainer1.addBall(ball3);
    ballContainer1.addBall(ball4);
    
    ballContainer1.addTwoHBalls();
    
}

function setup() {
    cnv = createCanvas(800, 600);

    background(0);
    centerCanvas();
    
    stroke(255);
    fill(255);
    
    createBalls();
    
    

}

function keyPressed(){
    ballContainer1.changeBalls();
}


function draw() {
    background(0);
    ballContainer1.drawBalls();

}
