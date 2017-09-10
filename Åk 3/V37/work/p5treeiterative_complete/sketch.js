var angle = 0;
var slider;

function setup(){
    createCanvas(400,400);
    angle_slider = createSlider(0, PI/3, PI/8, 0.01);
    len_slider = createSlider(0, 200, 100, 5);
    
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