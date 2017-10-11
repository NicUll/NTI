const SN_WIDTH = 10;
const SN_HEIGHT = 10;
const SEPARATION = 5;
const SNAKELEFT = 0;
const SNAKEUP = 1;
const SNAKERIGHT = 2;
const SNAKEDOWN = 3;
const DIRECTION = [[-1,0],[0,-1],[1,0],[0,1]];
const SNAKE_COLOR = 255;


function Snake(){
    
    //Create start and end blocks
    this.head = new Head(width/2,height/2,SNAKERIGHT);
    this.tail = this.head;
    
    //Redirect move to tail
    this.move = function(){
        this.tail.move();
    }
    
    //Draw snake
    //Start from tail and move up
    this.show = function(){
        stroke(SNAKE_COLOR);
        fill(SNAKE_COLOR);
        this.tail.show();
    }
    
    //Create new block and set as tail
    this.addBlock = function(){
        var tempTail = new Block(this.tail.xPos, this.tail.yPos, this.tail);
        this.tail = tempTail; 
    }
    
    //Simple setter
    this.changeDirection = function(newDirection){
        this.head.direction = newDirection;
    }
    
    //For manually moving the head
    this.manualMove = function(xPos,yPos){
        this.head.xPos = xPos;
        this.head.yPos = yPos;
    }
    
    this.collision = function(){
        return this.tail.collision(this.head.xPos,this.head.yPos);
    }
    
}

//A head block
function Head(xPos, yPos, direction){
    
    this.xPos = xPos;
    this.yPos = yPos;
    this.direction = direction;
    
    //Increase or decrease vertical or horizonalt position
    //based on movement-direction and size
    this.move = function(){
        this.xPos += DIRECTION[this.direction][0] * (SN_WIDTH+SEPARATION);
        this.yPos += DIRECTION[this.direction][1] * (SN_HEIGHT+SEPARATION);
    }
    

    //Draw the head rectangle
    this.show = function(){
        rect(this.xPos,this.yPos,SN_WIDTH,SN_HEIGHT);  
    }
    
    this.collision = function(xHead,yHead){
        return false;
    }
        
}


//A normal block
function Block(xPos, yPos, parent){
    
    this.xPos = xPos;
    this.yPos = yPos;
    this.parent = parent;
    
    //Recursive function, call parent
    //until the head is reached.
    this.move = function(){
        this.xPos = this.parent.xPos;
        this.yPos = this.parent.yPos;
        this.parent.move();
    }
    
    //Draw snake recursivley
    this.show = function(){
        rect(this.xPos, this.yPos,SN_WIDTH,SN_HEIGHT);
        this.parent.show();
    }
    
    this.collision = function(xHead, yHead){
        if(
            this.xPos < xHead + (SN_WIDTH + SEPARATION) && this.xPos + (SN_WIDTH + SEPARATION) > xHead && this.yPos < yHead + (SN_HEIGHT + SEPARATION) && this.yPos + (SN_HEIGHT + SEPARATION) > yHead){
            return true;
        }else{
            
            return this.parent.collision(xHead, yHead);
        }
    }
    
    
}