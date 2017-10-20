var directions = {
    37: [-1, 0],
    38: [0, -1],
    39: [1, 0],
    40: [0, 1]
};

function Game(gWidth, gHeight) {
    this.playing = false;
    this.lost = false;
    this.score = 0;

    this.snake = new Snake(gWidth, gHeight);

    this.food = {
        x: null,
        y: null
    };
    
    this.refFrame = 0;

    this.genFood = function () {
        this.food.x = Math.floor(Math.random() * (gWidth / SIZE));
        this.food.y = Math.floor(Math.random() * (gHeight / SIZE));

    }


    this.start = function () {
        this.playing = true;
        this.genFood();
    }
    
    this.showScore = function(){
        var s = "Score: " + this.score;
        textSize(14);
        text(s, 550, 20);
    }
    
    this.showFood = function(){
        stroke(0,0,0);
        fill(0, 255, 0);
        rect(this.food.x * SIZE, this.food.y * SIZE, SIZE, SIZE);
    }

    this.play = function () {
        
        this.snake.show();
        this.showFood();
        this.showScore();
        
        if(this.lost){
            textSize(36);
            fill(255);
            stroke(255,0,0);
            textAlign(CENTER, CENTER);
            text("GAME OVER", gWidth/2, gHeight/2);
            return;
        }
        
        if (!this.playing) {
            textSize(22);
            fill(255);
            stroke(255);
            text("Pausad", gWidth/2, gHeight/2);
            return;
        }
        
        
        
        //Move snake and check if no collision occured, returns "no collision"
        if(!this.snake.move()){
            this.lose();
        }

        if (dist(this.snake.head.x, this.snake.head.y, this.food.x, this.food.y) < 1) {
            this.snake.eat();
            this.score++;
            this.genFood();
        }

        
    }

    this.reset = function () {

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
            console.log(this.snake.direction != [0, 0]);
  
            //Kolla så att vi inte försöker vända ormen rakt om
            if(((directions[keyCode][0] + this.snake.direction[0] == 0) || (directions[keyCode][1] + this.snake.direction[1] == 0)) && !((this.snake.direction[0] == 0) && (this.snake.direction[1] == 0))){
                return;
            }
            this.snake.direction = directions[keyCode];
        }
        
        //Om vi trycker på blanksteg
        if (keyCode == 32){
            this.pause();
        }
        
        if (keyCode == 71){
            this.snake.eat();
        }

    }

}
