const TICKER_MAX = 50;

function Game(level, score, bordersOn) {
    this.level = 1;
    this.score = 0;
    this.bordersOn = bordersOn;
    this.ticker = 0;


    this.snake = new Snake();
    this.food = new Food();
    
    this.food.place();
    


    this.updateSnake = function () {
        
        
        if (this.ticker >= TICKER_MAX) {
            this.snake.move(); //Update snake blocks
            this.ticker = 0;
            this.checkCollision();

        } else {
            this.ticker += level;
        }
        
        background(0); //Draw background and snake
        this.snake.show();
        
    }
    
    this.snakeEat = function(){
        this.snake.addBlock();
        this.food.place();
    }

    this.update = function () {
        this.updateSnake();
        this.food.show();
    }
    
    this.checkCollision = function(){
        
        //Written here for clarity
        var collideLeft = this.snake.head.xPos < 0;
        var collideRight = this.snake.head.xPos + SN_WIDTH > width;
        var collideUp = this.snake.head.yPos < 0;
        var collideDown = this.snake.head.yPos + SN_HEIGHT > height; 
        
        if(collideLeft || collideRight || collideUp || collideRight){
            
            if(this.bordersOn){
                this.gameLost();
            }
            else{
                var xMove = 0;
                var yMove = 0;
                if(collideLeft){
                    xMove = width-SN_WIDTH;
                    yMove = this.snake.head.yPos;
                }
                else if(collideRight){
                    yMove = this.snake.head.yPos;
                }
                else if(collideUp){
                    xMove = this.snake.head.xPos;
                    yMove = height-SN_HEIGHT;
                }
                else{
                    xMove = this.snake.head.xPos;
                }
                this.snake.manualMove(xMove, yMove);
            }

        }
        
        else if(this.food.distance(this.snake.head.xPos, this.snake.head.yPos) < 10){
                    this.snakeEat();
                
                }
        console.log(this.food.distance(this.snake.head.xPos, this.snake.head.yPos));
        
    }
    
    this.gameLost = function(){
        console.log("Game Lost");
    }
    
    this.turnSnake = function(keyCode){
        var keyBinds = {37:LEFT,39:RIGHT,38:UP,40:DOWN}
        if (keyCode in keyBinds){
            this.snake.changeDirection(keyBinds[keyCode]);
        }
    }

}
