function Game() {
    this.playing = false;
    this.lost = false;

    this.playField = null;
    this.gameStats = null;
    this.UI = null;

    this.generatePlayField = function (width, height) {
        this.playField = new PlayField(width, height);
    }

    this.start = function() {
        this.playing = true;
    }

    this.play= function(){
        if (this.playing) {
            this.playField.update();
        }
    }

    this.reset= function() {

    }

    this.pause= function() {
        this.playing = false;
    }

    this.lose= function() {
        this.lost = true;
    }

    this.handleInput= function() {
        this.playField.snake.changeDirection();

    }

}
