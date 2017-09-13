var x_end = 50;

function centerCanvas(){
    var x = (windowWidth-width)/2;
    var y = (windowHeight-height)/2
    cnv.position(x,y)
}

function myFunc(){
    x_end = 300;
}

function setup(){
    cnv = createCanvas(600,400);
    background(220);
    centerCanvas();
    stroke(0);
    
    button1 = select("#box");
    button1.mousePressed(myFunc);
    frameRate(30);
}

function windowResized(){
    centerCanvas();
}

function draw(){
    background(220);
    line(0,300,x_end,height);
    
}



