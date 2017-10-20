const SIZE = 10;

function Snake(gWidth, gHeight) {
    this.maxX = gWidth/SIZE;
    this.maxY = gHeight/SIZE;
    this.direction = [0,0];

    //Börja med att skapa huvud
    this.head = new Block(10,5);

    this.body = [this.head]; //Lista med kropps-block
    
    this.show = function () {
        for (var i = 0; i < this.body.length; i++) {
            this.body[i].show();
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
        this.head.x += this.direction[0];
        this.head.y += this.direction[1];
        
        //Kör runt kanten
        if(this.head.x == this.maxX){
            this.head.x = 0;
        }else if(this.head.x == 0){
            this.head.x = this.maxX;
        }else if(this.head.y == this.maxY){
            this.head.y = 0;
        }else if(this.head.y == 0){
            this.head.y = this.maxY;
        }  
    }
}

function Block(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(255,255,255);
        rect(this.x*SIZE, this.y*SIZE, SIZE, SIZE);
    }



}
