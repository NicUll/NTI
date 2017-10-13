
var mySnake;

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
    
    mySnake = new Snake(200,200);
    fill(255);
    stroke(255);
    

}

function keyPressed(){

}


function draw() {
    background(0);
    mySnake.show();

}
