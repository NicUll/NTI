

var hands = ["sten", "sax", "påse"];

function genOpHand(){
    var opponentNumber = Math.random()*3;
    opponentNumber = opponentNumber.toFixed(0);
    return opponentNumber;
}

function getPlayerHand(){
    var playNum = prompt("0. Sten, 1. Sax, 2. Påse, Ditt val: ");
    return playNum;
}

function checkWinner(pl, cp){
    
    //Om spelaren och datorn har samma
    if(pl == cp){
        console.log("Det blev oavgjort!");
    }
    
    //Har spelaren sten
    if(pl == 0){
        if(cp == 1){
            console.log("Spelaren vinner!");
        }
        else{
            console.log("Datorn vinner!")
        }
    }
    //Har spelaren sax
    else if(pl == 1){
        if(cp==0){
            console.log("Datorn vinner!");
        }
        else{
            console.log("Spelaren vinner!");
        }
    }
    //Har spelaren påse
    else{
        if(cp==0){
            console.log("Spelaren vinner!");
        }
        else{
            console.log("Datorn vinner!");
        }
    }
}

var cpNum = genOpHand();
var plNum = getPlayerHand();
console.log("Datorn spelar: " + hands[cpNum]);
console.log("Spelaren spelar: " + hands[plNum]);

checkWinner(plNum, cpNum);