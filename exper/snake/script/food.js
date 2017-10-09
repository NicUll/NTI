const FOOD_COLOR = (0, 220, 0);

function Food(){
    this.xPos = null;
    this.yPos = null;
    
    this.size = SN_HEIGHT;
    
    this.place = function(){
        this.xPos = Math.random() * width - SN_WIDTH;
        this.yPos = Math.random() * height - SN_HEIGHT; 
    }
    
    this.show = function(){
        stroke(0,255,0);
        fill(0,255,0);
        rect(this.xPos, this.yPos, this.size, this.size);
        

    }
    
    this.distance = function(xVal, yVal){
        var xDistSq = (this.xPos - xVal)**2;
        var yDistSq = (this.yPos - yVal)**2;
        
        return (Math.sqrt(xDistSq + yDistSq));
    }
}