const SIZE = 10;

/*
const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
*/



/* Förklara på GitHub */
//Rör den sig i x-led?


function Snake(x, y) {
    this.direction = RIGHT;

    //Börja med att skapa huvud
    this.head = new Block(x, y);

    this.body = [this.head]; //Lista med kropps-block
    
    this.show = function () {
        for (var i = 0; i < this.body.length; i++) {
            this.body[i].show();
        }
    }
    
    this.changeDirection = function(){
        if(keyCode == LEFT_ARROW){
            this.direction = LEFT;
        }else if(keyCode == RIGHT_ARROW){
            this.direction = RIGHT;
        }else if(keyCode == UP_ARROW){
            this.direction = UP;
        }else if(keyCode == DOWN_ARROW){
            this.direction = DOWN;
        }
    }
    
    this.eat = function(){
        var lastBlock = this.body[this.body.length - 1]; //Sista blocket i listan, svansen
    
        var tempBlock = new Block(lastBlock.x, lastBlock.y); //Nytt block som läggs till
        
        this.move();
        
        this.body.push(tempBlock);
    }

    this.move = function () {
        
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        //Vilken riktning har huvudet?
        if (this.direction == LEFT) {
            this.head.x -= DIST;
        } else if (this.direction == RIGHT) {
            this.head.x += DIST;
        } else if (this.direction == UP) {
            this.head.y -= DIST;
        } else {
            this.head.y += DIST;
        }
    }




}


function Block(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        rect(this.x, this.y, SIZE, SIZE);
    }



}
