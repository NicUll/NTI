const TICKER_MAX = 50;

function Game(level, score, bordersOn) {


    this.level = 1; //Determines difficulty
    this.score = 0; //Starting score

    this.bordersOn = bordersOn; //Wether the player should loose when touching the edge of the playfield
    this.ticker = 0; //Controll of snakespeed

    this.play = false;
    this.lost = false;


    this.snake = new Snake(); //The snake-object
    this.food = new Food(); //A food object for generating food




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
                this.ticker += level; //Increase the counter 
            }
        }

        background(0); //Draw background and snake
        this.snake.show();
    }

    /* Increase snake size and move food */
    this.snakeEat = function () {
        this.snake.addBlock();
        this.food.place();
    }

    /*Updating the entire game*/
    this.update = function () {
        this.updateSnake();
        this.food.show();
    }

    //Check if the cnake has collided anywhere (food, wall, etc.)
    this.checkCollision = function () {
        //Written here for clarity, check different collisions
        var collideLeft = this.snake.head.xPos < 0;
        var collideRight = this.snake.head.xPos + SN_WIDTH > width;
        var collideUp = this.snake.head.yPos < 0;
        var collideDown = this.snake.head.yPos + SN_HEIGHT > height;

        //Wall collision
        if (collideLeft || collideRight || collideUp || collideDown) {
            if (this.bordersOn) {
                this.gameLost(); //If walls should result in game lost
            } else { //Otherwise wrap the snake around the play-area
                var xMove = 0;
                var yMove = 0;
                if (collideLeft) {
                    xMove = width - SN_WIDTH;
                    yMove = this.snake.head.yPos;
                } else if (collideRight) {
                    yMove = this.snake.head.yPos;
                } else if (collideUp) {
                    xMove = this.snake.head.xPos;
                    yMove = height - SN_HEIGHT;
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
            this.snake.changeDirection(keyBinds[keyCode]);
        }
    }

}
