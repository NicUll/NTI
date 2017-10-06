const SN_WIDTH = 10;
const SN_HEIGHT = 10;
const SEPARATION = 5;
const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const DIRECTION = [[-1,0],[0,-1],[1,0],[0,1]];
const SNAKE_COLOR = 255;


function Snake(){
    this.head = new Head(width/2,height/2,RIGHT);
    this.tail = this.head;
    
    this.move = function(){
        this.tail.move();
    }
    
    this.show = function(){
        stroke(SNAKE_COLOR);
        fill(SNAKE_COLOR);
        this.tail.show();
    }
    
    this.addBlock = function(){
        var tempTail = new Block(this.tail.xPos, this.tail.yPos, this.tail);
        this.tail = tempTail;
        
    }
    
    this.changeDirection = function(newDirection){
        this.head.direction = newDirection;
    }
    
    this.manualMove = function(xPos,yPos){
        this.head.xPos = xPos;
        this.head.yPos = yPos;
    }
    
    
}

function Head(xPos, yPos, direction){
    this.xPos = xPos;
    this.yPos = yPos;
    this.direction = direction;
    
    this.move = function(){
        this.xPos += DIRECTION[this.direction][0] * (SN_WIDTH+SEPARATION);
        this.yPos += DIRECTION[this.direction][1] * (SN_HEIGHT+SEPARATION);
    }
    

    
    this.show = function(){
        rect(this.xPos,this.yPos,SN_WIDTH,SN_HEIGHT);
        
    }
        
}

function Block(xPos, yPos, parent){
    this.xPos = xPos;
    this.yPos = yPos;
    this.parent = parent;
    
    this.move = function(){
        this.xPos = this.parent.xPos;
        this.yPos = this.parent.yPos;
        this.parent.move();
    }
    
    this.show = function(){
        rect(this.xPos, this.yPos,SN_WIDTH,SN_HEIGHT);
        this.parent.show();
    }
    
    
}