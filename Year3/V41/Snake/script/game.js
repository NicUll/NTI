
const directions = {

    37: [-1, 0],
    38: [0, -1],
    39: [1, 0],
    40: [0, 1]
};

function Game(gWidth, gHeight) {


    this.reset = function() {
        
        this.playing = false;
        this.lost = false;
        this.score = 0;
        this.level = 1;

        this.snake = new Snake(gWidth, gHeight);

        this.refFrame = 0;


        this.food = {
            x: null,
            y: null
        };
        

        
        this.nextDirection = [[0,0]];
        this.timeToUpdate = 14;
        

    }
    
    this.reset();



    // noinspection UnterminatedStatementJS
    this.genFood = function () {
        this.food.x = Math.floor(Math.random() * (gWidth / SIZE));
        this.food.y = Math.floor(Math.random() * (gHeight / SIZE));

    }


    this.start = function () {
        this.playing = true;
        this.genFood();
    }
    
    this.showStats = function() {
        textSize(16);
        fill(255);
        stroke(255);
        
        var s = "Score: " + this.score;
        var l = "Level: " + this.level;
        
        // noinspection Annotator
        textAlign(RIGHT,TOP);
        text(s +" " + l, gWidth,0);
    }


    this.showFood = function () {
        stroke(0, 0, 0);
        fill(0, 255, 0);
        rect(this.food.x * SIZE, this.food.y * SIZE, SIZE, SIZE);
    }

    
    this.play = function () {

        if (this.lost) {
            var elapsedFrames = frameCount - this.refFrame;
            const animationTime = 130;
            if (elapsedFrames < animationTime) {
                if (elapsedFrames < 20) {
                    this.snake.show();
                }
                if ((Math.floor(elapsedFrames / 8)) % 2 === 0) {
                    this.snake.show();
                } else {
                    this.snake.head.show();
                }
                return;
            }
            this.snake.show();

            push();
            textAlign(CENTER, CENTER);
            translate(gWidth / 2, gHeight / 2);

            textSize(36);
            strokeWeight(4);
            fill(255);
            stroke(255, 0, 0);
            text("GAME OVER", 0, 0);

            textSize(24);
            //stroke(255, 255, 255);
            text("Score: " + this.score, 0, 50);

            textSize(12);
            text("R - Restart", 0, 70);

            pop();


            return;
        }

        this.snake.show();
        this.showFood();
        this.showStats();

        if (!this.playing) {
            textSize(22);
            fill(255);
            stroke(255);
            textAlign(CENTER, CENTER);
            text("Paused", gWidth / 2, gHeight / 2);
            return;
        }
        
        if(this.timeToUpdate > 0){
            this.timeToUpdate--;
            return;
        }
        
        this.timeToUpdate = 15-this.level > 0 ? 15-this.level : 0;
        
        if(this.nextDirection.length > 2){
            console.log(this.nextDirection);
        }
        
        this.snake.direction = this.nextDirection.pop()
        //Move snake and check if no collision occurred, returns "no collision"
        if (!this.snake.move()) {
            this.lose();
        }
        this.nextDirection = [this.snake.direction];
        

        if (dist(this.snake.head.x, this.snake.head.y, this.food.x, this.food.y) < 1) {
            this.snake.eat();
            this.score++;
            this.genFood();
            if(this.score%5===0){
                this.level++;
            }
        }


    }

    

    this.pause = function () {
        this.playing = !this.playing;
    }

    this.lose = function () {
        this.lost = true;
        this.refFrame = frameCount;
    }

    this.handleInput = function () {
        //Sätter rätt riktning på snake-objektet
        if (keyCode in directions) {
            //Kolla så att vi inte försöker vända ormen rakt om
            if (((directions[keyCode][0] + this.snake.direction[0] === 0) || (directions[keyCode][1] + this.snake.direction[1] === 0)) && !((this.snake.direction[0] === 0) && (this.snake.direction[1] === 0))) {
                return;
            }
            this.nextDirection.push(directions[keyCode]);
            //this.snake.direction = directions[keyCode];
        }

        //Om vi trycker på blanksteg
        if (keyCode === 32) {
            this.pause();
        }

        if (keyCode === 71) {
            this.snake.eat();
        }

        if (keyCode === 82) {
            this.reset();
            this.start();
        }

    }

}
