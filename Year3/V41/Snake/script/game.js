<<<<<<< HEAD
function Game() {
    this.playing = false;
    this.lost = false;
=======
var directions = {37:[-1,0], 38:[0,-1], 39:[1,0], 40:[0,1]};

function Game() {
    this.playing = false;
    this.lost = false;

    var x = 5;
>>>>>>> parent of 9308048... Lesson done

    this.start = function() {
        this.playing = true;
    }

    this.play = function(){
        if (this.playing) {
<<<<<<< HEAD
            this.playField.update();
=======
>>>>>>> parent of 9308048... Lesson done
        }
    }
    

    this.reset = function() {

    }

    this.pause = function() {
        this.playing = false;
    }

    this.lose = function() {
        this.lost = true;
    }

<<<<<<< HEAD
    this.handleInput= function() {
    
=======
    this.handleInput = function() {
        if(keyCode in directions){
            console.log(directions[keyCode]);
        }
>>>>>>> parent of 9308048... Lesson done

    }

}
