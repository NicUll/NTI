

function BallContainer(){
    this.balls = [];
    
    this.addBall = function(ball){
        this.balls.push(ball);
    }
    
    this.addTwoHBalls = function(){
        for(var i=0;i<2000;i++){
            var randX = Math.random()*width;
            var randY = Math.random()*height;
            var randR = Math.random()*100;
            var randColor = color(Math.random()*255,Math.random()*255,Math.random()*255);
            
            var tempBall = new Ball(randX,randY,randR,randColor);
            
            this.addBall(tempBall);
        }
    }
    
    this.drawBalls = function(){
        for(var i=0;i<this.balls.length;i++){
            this.balls[i].drawBall();
        } 
    }
    
    this.changeBalls = function(){
        for(var i=0;i<this.balls.length;i++){
            this.balls[i].changeAll();
        }
    }
    
}





