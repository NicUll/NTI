const TICKER_MAX = 50;

function Game(level, score, bordersOn) {
<<<<<<< HEAD

    /*
    this.level = 1; //Determines difficulty
    this.score = 0; //Starting score
    */

    this.bordersOn = bordersOn; //Wether the player should loose when touching the edge of the playfield
    this.ticker = 0; //Controll of snakespeed

    this.play = false;
    this.lost = false;
    
    this.top = 80;
    this.playWidth = width;
    this.playHeight = height;
    
    


    this.snake = new Snake(); //The snake-object
    this.food = new Food(this.playWidth, this.top); //A food object for generating food
    
    this.gameStats = new GameStats(score, level, width, this.top);
    

=======
    this.level = 1;
    this.score = score;
    this.bordersOn = bordersOn;
    this.ticker = 0;


    this.snake = new Snake();
    this.food = new Food(width, height);
    this.food.newFood();
>>>>>>> parent of 331a7cd... Merge branch 'master' into Cleanup


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
    }

    this.update = function () {
        this.updateSnake();
        this.food.show();
<<<<<<< HEAD
        this.topBarShow();
        this.gameStats.printStats();
=======
>>>>>>> parent of 331a7cd... Merge branch 'master' into Cleanup
    }
    
    this.checkCollision = function(){
        
        //Written here for clarity
        var collideLeft = this.snake.head.xPos < 0;
<<<<<<< HEAD
        var collideRight = this.snake.head.xPos + SN_WIDTH > this.playWidth;
        var collideUp = this.snake.head.yPos < this.top;
        var collideDown = this.snake.head.yPos + SN_HEIGHT > this.playHeight;

        //Wall collision
        if (collideLeft || collideRight || collideUp || collideDown) {
            if (this.bordersOn) {
                this.gameLost(); //If walls should result in game lost
            } else { //Otherwise wrap the snake around the play-area
=======
        var collideRight = this.snake.head.xPos + SN_WIDTH > width;
        var collideUp = this.snake.head.yPos < 0;
        var collideDown = this.snake.head.yPos + SN_HEIGHT > height; 
        
        if(collideLeft || collideRight || collideUp || collideDown){
            
            if(this.bordersOn){
                this.gameLost();
            }
            else{
>>>>>>> parent of 331a7cd... Merge branch 'master' into Cleanup
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
    }
    
    this.gameLost = function(){
        console.log("Game Lost");
    }
<<<<<<< HEAD

    this.turnSnake = function (keyCode) {
        //Bind keys with numbers
        var keyBinds = {
            37: LEFT,
            39: RIGHT,
            38: UP,
            40: DOWN
        }
        
        //Start the game if key pressed, snake still, and we havent lost.
        if (!(this.lost || this.play)) {
            this.play = true;
        }
        
        //If arrow key, turn snake
        if (keyCode in keyBinds) {
=======
    
    this.turnSnake = function(keyCode){
        var keyBinds = {37:LEFT,39:RIGHT,38:UP,40:DOWN}
        if (keyCode in keyBinds){
            //if(snake.key)
>>>>>>> parent of 331a7cd... Merge branch 'master' into Cleanup
            this.snake.changeDirection(keyBinds[keyCode]);
        }
    }

}
