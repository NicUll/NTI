var directions = {
    37: [-1, 0],
    38: [0, -1],
    39: [1, 0],
    40: [0, 1]
};

function Game(gWidth, gHeight) {
    this.playing = false;
    this.lost = false;

    this.snake = new Snake(gWidth, gHeight);

    this.food = {
        x: null,
        y: null
    };


    this.genFood = function () {
        this.food.x = Math.floor(Math.random() * (gWidth / SIZE));
        this.food.y = Math.floor(Math.random() * (gHeight / SIZE));
    }


    this.start = function () {
        this.playing = true;
        this.genFood();
    }

    this.showFood = function () {
        fill(0, 255, 0);
        rect(this.food.x*SIZE, this.food.y*SIZE, SIZE, SIZE);
    }

    this.foodCollide = function () {
        var HX = this.snake.head.x;
        var HY = this.snake.head.y;
        var FX = this.food.x;
        var FY = this.food.y;

        if (dist(HX, HY, FX, FY) < 1) {
            return true;
        }
        return false;
    }

    
    this.play = function () {
        
        if (this.lost) {
            return;
        }

        this.snake.show();
        this.showFood();
    

        if (!this.playing) {
            return;
        }

        this.snake.move();
        if(this.snake.collision){
            this.lose();
        }


        if (this.foodCollide()) {
            this.snake.eat();
            this.genFood();
            
        }


    }


    this.reset = function () {

    }

    this.pause = function () {
        this.playing = false;
    }

    this.lose = function () {
        this.lost = true;
    }

    this.handleInput = function () {
        //Sätter rätt riktning på snake-objektet
        if (keyCode in directions) {
            this.snake.direction = directions[keyCode];
        }

    }

}
