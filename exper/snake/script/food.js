const FOOD_COLOR = (0,255,0);

function Food(playWidth, topBar){
    
    this.xPos = null;
    this.yPos = null;
    this.playWidth = playWidth;
    this.topBar = topBar;
    
    this.size = SN_HEIGHT;
    
    //Place food in random position
    this.place = function(){
        this.xPos = Math.random() * width - SN_WIDTH;
        this.yPos = Math.random() * (height-this.topBar) - SN_HEIGHT + this.topBar ; 
    }
    
    this.show = function(){
        stroke(0,220,0);
        fill(0,220,0);
        rect(this.xPos, this.yPos, this.size, this.size);
        

    }
<<<<<<< HEAD
    
    this.distance = function(xVal, yVal){
        var xDistSq = (this.xPos - xVal)**2;
        var yDistSq = (this.yPos - yVal)**2;
        
        return (Math.sqrt(xDistSq + yDistSq));
    }
=======
>>>>>>> parent of 331a7cd... Merge branch 'master' into Cleanup
}