

function GameStats(score, level, boxWidth, boxHeight){
    this.score = score;
    this.level = level;
    this.width = boxWidth;
    this.height = boxHeight;

    
    this.incScore = function(){
        this.score++;
    }
    
    this.incLevel = function(){
        this.level++;
    }
    
    this.printStats = function(){
        textSize(20);      
        text("Level: " + this.level, 10, 10, 100, 30);
    }
    
    
}