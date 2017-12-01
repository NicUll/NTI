
function getSize(){
    return Math.random()*200 + "px";
}


var box = document.getElementById("box");

box.style.height = getSize();
box.style.width = getSize();

