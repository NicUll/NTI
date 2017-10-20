<<<<<<< HEAD
<<<<<<< HEAD
function Game() {
    this.playing = false;
    this.lost = false;
=======
var directions = {37:[-1,0], 38:[0,-1], 39:[1,0], 40:[0,1]};

function Game() {
    this.playing = false;
    this.lost = false;

    var x = 5;
>>>>>>> parent of 9308048... Lesson done
=======
var directions = {37:[-1,0], 38:[0,-1], 39:[1,0], 40:[0,1]};

function Game(gWidth, gHeight) {
    this.playing = false;
    this.lost = false;
<<<<<<< HEAD
=======
    this.snake = new Snake(gWidth, gHeight);
    
    this.food = {x:null,y:null};
    
    this.genFood = function(){
        this.food.x = Math.floor(Math.random()*(gWidth/SIZE));
        this.food.y = Math.floor(Math.random()*(gHeight/SIZE));
        
    }
>>>>>>> master
>>>>>>> parent of 206399f... Revert "Merge branch 'master' into snake_comp"

    this.start = function() {
        this.playing = true;
        this.genFood();
    }

    this.play = function(){
        if (this.playing) {
<<<<<<< HEAD
<<<<<<< HEAD
            this.playField.update();
=======
>>>>>>> parent of 9308048... Lesson done
=======
            this.snake.show();
            fill(0,255,0);
            rect(this.food.x, this.food.y, SIZE, SIZE);
            this.snake.move();
            console.log(this.snake.head.x);
            console.log(dist(this.snake.head.x, this.snake.head.y, this.food.x, this.food.y));
            if(dist(this.snake.head.x, this.snake.head.y, this.food.x, this.food.y) < 3){
                this.snake.eat();
            }
            
>>>>>>> parent of 206399f... Revert "Merge branch 'master' into snake_comp"
        }
    }

    this.reset = function() {

    }

    this.pause = function() {
        this.playing = false;
    }

    this.lose = function() {
        this.lost = true;
    }

<<<<<<< HEAD
    this.handleInput= function() {
    
=======
    this.handleInput = function() {
<<<<<<< HEAD
        if(keyCode in directions){
            console.log(directions[keyCode]);
        }
>>>>>>> parent of 9308048... Lesson done
=======
        
        //Sätter rätt riktning på snake-objektet
        if(keyCode in directions){
            this.snake.direction = directions[keyCode];
        }
>>>>>>> master
>>>>>>> parent of 206399f... Revert "Merge branch 'master' into snake_comp"

    }

}

