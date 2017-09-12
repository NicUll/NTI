var y = 100;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2
    cnv.position(x, y)
}

function setup() {
    cnv = createCanvas(600, 400);

    centerCanvas();

    stroke(255);
    frameRate(30);
}



function windowResized() {
    centerCanvas();
}

function draw() {
    background(0); // Set the background to black
    y = y - 1;
    if (y < 0) {
        y = height;
    }
    line(0, y, width, y);

}
