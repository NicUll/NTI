const FOOD_COLOR = (0,220,0);

function Food(gWidth, gHeight) {

    this.gWidth = gWidth;
    this.gHeight = gHeight;
    this.xPos = 0;
    this.yPos = 0;


    this.newFood = function () {
        this.xPos = Math.random() * this.gWidth;
        this.yPos = Math.random() * this.gHeight;
    }

    this.show = function () {
        fill(0,220,0);
        stroke(0,220,0);
        rect(this.xPos,this.yPos,SN_WIDTH,SN_HEIGHT);

    }
