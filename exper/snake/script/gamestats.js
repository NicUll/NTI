

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
        textSize(fontSize);    
        textAlign(RIGHT);
        text("Level: " + this.level, (boxWidth*(1/4)), (boxHeight/2)-15, width/2, 30);
        text("Score: " + this.score, (boxWidth*(3/4)), (boxHeight/2)-15, width/2, 30);
    }
    
    
}