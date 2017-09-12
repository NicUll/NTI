var y; //Så att den kan kommas åt överallt

function centerCanvas() {
    xPos = (windowWidth - width) / 2;
    yPos = (windowHeight - height) / 2;
    myCanvas.position(xPos, yPos);
}


function setup() {
    myCanvas = createCanvas(400, 400);
    background(0);
    centerCanvas();

    frameRate(30); //Kalla på draw() 30 gånger per sekund
    y = height; //y startar på höjden av canvas
    stroke(255, 0, 0); //Linjefärg röd
}

function windowResized() {
    centerCanvas();
}

function draw() {
    background(0); //Sätt bakgrund svart
    line(0, y, width, y); //Rita linje vid nuvarande höjd
    y--; //Minska y värde med 1
    if(y<0){ //Kolla om vi är högst upp i canvas, reseta isåfall
        y=height;
    }
    


}
