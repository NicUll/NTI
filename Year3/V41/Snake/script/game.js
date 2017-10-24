var directions = {
    37: [-1, 0],
    38: [0, -1],
    39: [1, 0],
    40: [0, 1]
};

function Game(gWidth, gHeight) {

    
    

    this.reset = function () {
        this.playing = false;
        this.lost = false;

        this.snake = new Snake(gWidth, gHeight);

        this.food = {
            x: null,
            y: null
        };
        
        this.score = 0;
        this.progressBar = new p5.Element(div);
    }
    
    this.reset();
    
    this.setupProgressBar(){
        this.progressBar.position(100,100);
    }

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
        rect(this.food.x * SIZE, this.food.y * SIZE, SIZE, SIZE);
    }
    
    this.showStats = function(){
        fill(255);
        stroke(255);
        textSize(16);
        textAlign(RIGHT, TOP);
        text("Score: " + this.score, gWidth-10, 10);
    }

    this.foodCollide = function () {
        var HX = this.snake.head.x;
        var HY = this.snake.head.y;
        var FX = this.food.x;
        var FY = this.food.y;

        if (dist(HX, HY, FX, FY) < 1) {
            this.score++;
            return true;
        }
        return false;
    }


    this.play = function () {

        if (this.lost) {
            textSize(30);
            fill(255,0,0);
            textAlign(CENTER,CENTER);
            text("GAME OVER", gWidth/2, gHeight/2);
            return;
        }

        this.snake.show();
        this.showFood();
        this.showStats();


        if (!this.playing) {
            return;
        }

        this.snake.move();
        if (this.snake.collision) {
            this.lose();
        }


        if (this.foodCollide()) {
            this.snake.eat();
            this.genFood();

        }


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
        } else if (keyCode === 32) {
            this.playing = !this.playing;
        } else if (keyCode === 71) {
            this.snake.eat();
        } else if(keyCode === 82){
            this.reset();
            this.start();
        }

    }

}
