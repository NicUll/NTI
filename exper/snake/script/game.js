const TICKER_MAX = 50;
const PADDIN_TOP = 100;
const MOBILE = 0;
const DESKTOP = 1;

function Game(level, score, bordersOn) {

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
    




    /*Make sure we se a snake from the beginning, 
    as well as food*/
    this.setupGame = function () {
        this.snake.show();
        this.food.place();
        
    }


    /* Updates snake position and draws to the canvas*/
    this.updateSnake = function () {
        if (this.play) {
            if (this.ticker >= TICKER_MAX) { //Make sure we only update every "TICKER_MAX"th iteration
                this.snake.move(); //Update snake blocks 
                this.ticker = 0; //Reset counter
                this.checkCollision(); //See what the movement resulted in

            } else {
                this.ticker += (level+19); //Increase the counter 
            }
        }

        background(0); //Draw background and snake
        this.snake.show();
    }

    /* Increase snake size and move food */
    this.snakeEat = function () {
        this.snake.addBlock();
        this.food.place();
        this.gameStats.incScore();
    }

    /*Updating the entire game*/
    this.update = function () {
        this.updateSnake();
        this.food.show();
        this.topBarShow();
        this.gameStats.printStats();
    }
    
    this.topBarShow = function(){
        stroke(255);
        line(0, this.top, this.playWidth, this.top);
    }

    //Check if the cnake has collided anywhere (food, wall, etc.)
    this.checkCollision = function () {
        //Written here for clarity, check different collisions
        var collideLeft = this.snake.head.xPos < 0;
        var collideRight = this.snake.head.xPos + SN_WIDTH > this.playWidth;
        var collideUp = this.snake.head.yPos < this.top;
        var collideDown = this.snake.head.yPos + SN_HEIGHT > this.playHeight;

        //Wall collision
        if (collideLeft || collideRight || collideUp || collideDown) {
            if (this.bordersOn) {
                this.gameLost(); //If walls should result in game lost
            } else { //Otherwise wrap the snake around the play-area
                var xMove = 0;
                var yMove = 0;
                if (collideLeft) {
                    xMove = this.playWidth - SN_WIDTH;
                    yMove = this.snake.head.yPos;
                } else if (collideRight) {
                    yMove = this.snake.head.yPos;
                } else if (collideUp) {
                    xMove = this.snake.head.xPos;
                    yMove = play - SN_;
                } else {
                    xMove = this.snake.head.xPos;
                }
                this.snake.manualMove(xMove, yMove);
            }

        } else if (this.food.distance(this.snake.head.xPos, this.snake.head.yPos) < 10) {
            //Have we collided with food?
            this.snakeEat();
        }else if(this.snake.collision()){
            this.gameLost();
            
        }


    }

    this.gameLost = function () {
        this.lost = true;
        this.play = false;
    }
    
    this.handleInput = function(inputData, deviceType){
        //Start the game if key pressed, snake still, and we havent lost.
        if (!(this.lost || this.play)) {
            this.play = true;
        }
        
        if(deviceType == MOBILE){
            this.snake.changeDirection(inputData);
        }else{
            this.turnSnake(inputData);
        }
    }

    this.turnSnake = function (keyCode) {
        //Bind keys with numbers
        var keyBinds = {
            37: SNAKELEFT,
            39: SNAKERIGHT,
            38: SNAKEUP,
            40: SNAKEDOWN
        }
        
        
        
        //If arrow key, turn snake
        if (keyCode in keyBinds) {
            this.snake.changeDirection(keyBinds[keyCode]);
        }
    }

}
