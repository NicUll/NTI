var button = document.getElementById("add");
var display = document.getElementById("display");

button.onclick = function(){
    var newDiv = document.createElement("div");
    newDiv.innerText = "ost";
    display.appendChild(newDiv);
}


function Bar(id, label, value){
    this.id = id;
    this.label = label;
    this.value = value;
    /*
    this.html = 
    */
}

function Graph(htmlid, xlabel, ylabel){
    this.id = htmlid;
    this.xlabel = xlabel;
    this.ylabel = ylabel;
    this.bars = [];
    
    this.addBar = function(label, value){
        var tempId = this.id + "-bar" + this.bars.length;
        var tempBar = new Bar(tempId, label, value);
        this.bars.push(tempBar);
    }
    
}