const SIZE = 20;

function Snake(gWidth, gHeight) {
    this.maxX = gWidth/SIZE - 1;
    this.maxY = gHeight/SIZE - 1;
    this.direction = [0,0];
    this.collision = false;

    //Börja med att skapa huvud
    this.head = new Block(10,5);

    this.body = [this.head]; //Lista med kropps-block
    
    this.show = function () {
        for (var i = 0; i < this.body.length; i++) {
            this.body[i].show();
        }
    }
    
    
    this.eat = function(){
        var lastBlock = this.body[this.body.length - 1]; //Sista blocket i listan, svansen
    
        var tempBlock = new Block(lastBlock.x, lastBlock.y); //Nytt block som läggs till
        
        this.move();
        
        this.body.push(tempBlock);
    }

    this.move = function () {
        
        var nextHeadX = this.head.x + this.direction[0];
        var nextHeadY = this.head.y + this.direction[1];
        
        var bodyHeadDistance;
        
        
        for (var i = this.body.length - 1; i > 0; i--) {
            bodyHeadDistance = dist(nextHeadX, nextHeadY, this.body[i].x, this.body[i].y);
            if(bodyHeadDistance < 1){
                this.collision = true;
            }            
            
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        //Vilken riktning har huvudet?
        this.head.x = nextHeadX;
        this.head.y = nextHeadY;
        
        var collideRight = (this.head.x > this.maxX);
        var collideLeft = (this.head.x < 0);
        var collideDown = (this.head.y > this.maxY);
        var collideUp = (this.head.y < 0);
        
        //Kör runt kanten
        if(collideRight){
            this.head.x = 0;
        }else if(collideLeft){
            this.head.x = this.maxX;
        }else if(collideDown){
            this.head.y = 0;
        }else if(collideUp){
            this.head.y = this.maxY;
        }  
        
        
    }
}

function Block(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(255,255,255);
        stroke(0);
        rect(this.x*SIZE, this.y*SIZE, SIZE, SIZE);
    }



}
