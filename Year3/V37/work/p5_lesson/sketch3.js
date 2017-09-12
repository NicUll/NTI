
function centerCanvas(){
    xPos = (windowWidth-width)/2;
    yPos = (windowHeight-height)/2; 
    myCanvas.position(xPos, yPos);
}


function setup(){
    myCanvas = createCanvas(400,400);
    background(220);
    
    centerCanvas();
}

function windowResized(){
    centerCanvas();
}

function draw(){
    
}