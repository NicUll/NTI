

function PlayField(width, height){
    
    this.width = width;
    this.height = height;
    
    this.snake = new Snake(width/2, height/2);
    this.food = new Food(width, height);
    
    
    this.update = function(){
        this.snake.move();
        this.snake.show();
        
    }
    
    this.checkCollision = function(){
        
    }
    
}