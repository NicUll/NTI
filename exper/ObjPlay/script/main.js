var button = document.getElementById("add");
var display = document.getElementById("display");

button.onclick = function(){
    var newDiv = document.createElement("div");
    newDiv.innerText = "ost";
    display.appendChild(newDiv);
}