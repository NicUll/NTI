
const SIZE = 10;


function Snake(x, y){
    this.x = x;
    this.y = y;
    
    this.head = new Block(this.x, this.y); 
    
    this.body = [this.head]; //Lista med kropps-block
    
    this.draw = function(){
        for(var i=0; i < this.body.length; i++){
            this.body[i].draw();
        }
    }
    
    
}


function Block(x, y){
    this.x = x;
    this.y = y;
    
    this.draw = function(){
        rect(this.x, this.y, SIZE, SIZE);
    }
    
}