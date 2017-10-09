

function GameStats(score, level, boxWidth, boxHeight){
    this.score = score;
    this.level = level;
    this.width = boxWidth;
    this.height = boxHeight;
    this.ticker = 0;

    
    this.incScore = function(){
        this.score++;
        this.ticker++;
        if(this.ticker == 5){
            this.incLevel();
            this.ticker = 0;
        }
    }
    
    this.incLevel = function(){
        this.level++;
    }
    
    this.printStats = function(){
        textSize(20);      
        text("Level: " + this.level, (boxWidth/2)-200, (boxHeight/2)-15, 100, 30);
        text("Score: " + this.score, (boxWidth/2)+100, (boxHeight/2)-15, 100, 30);
    }
    
    
}