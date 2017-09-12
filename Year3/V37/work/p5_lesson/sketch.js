function centerCanvas(){
    var x = (windowWidth-width)/2;
    var y = (windowHeight-height)/2
    cnv.position(x,y)
}

function setup(){
    cnv = createCanvas(600,400);
    background(220);
    centerCanvas();
    stroke(255);
    
}

function windowResized(){
    centerCanvas();
}

function draw(){

    
}



