
const SIZE = 10;


function Snake(x, y){
    this.x = x; //Ormens x-position
    this.y = y; //Ormens y-position
    
    //Börja med att skapa huvud
    this.head = new Block(this.x, this.y); 
    
    this.body = [this.head]; //Lista med kropps-block
    
    this.show = function(){
        for(var i=0; i < this.body.length; i++){
            this.body[i].show();
        }
    }
    
    
}


function Block(x, y){
    this.x = x;
    this.y = y;
    
    this.show = function(){
        rect(this.x, this.y, SIZE, SIZE);
    }
    
}