var angle = 0;
var len_slider;
var angle_slider;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2
    cnv.position(x, y);

    len_slider.position(x,y+height);
    angle_slider.position(x,y+height+20);
    
}

function setup(){
    cnv = createCanvas(400,400);
    
    angle_slider = createSlider(0, PI/3, PI/8, 0.01);
    len_slider = createSlider(0, 200, 100, 2);
    
    centerCanvas();


}

function windowResized(){
    centerCanvas();
}

function draw(){
    background(51);
    
    angle = angle_slider.value();
    len = len_slider.value();
    
    stroke(255);
    translate(200, height);
    
    branch(len);   
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len>4){
        push();
        rotate(angle);
        branch(len*0.67);
        pop();
        
        push();
        rotate(-angle);
        branch(len*0.67);
        pop();
    }
}