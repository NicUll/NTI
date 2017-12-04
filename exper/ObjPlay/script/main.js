

var button = document.getElementById("add");
var display = document.getElementById("display");




function createExtElement(type, id){
    /*
    var tempElement = '<' + type + ' id="' + id + '"></' + type + '>';*/
    var tempElement = document.createElement(type);
    tempElement.id = id;
    return tempElement;
}


function Bar(id, label, value, color){
    this.id = id;
    this.label = label;
    this.value = value;
    this.color = color;

    this.htmlElement = createExtElement("div", this.id);
    
}

function Graph(htmlid, xlabel, ylabel){
    this.id = htmlid;
    this.xlabel = xlabel;
    this.ylabel = ylabel;
    this.bars = {income:[],expense:[]};
    
    this.addBar = function(type, label, value, color){
        var tempId = this.id + "-bar" + this.bars[type].length;
        var tempBar = new Bar(tempId, label, value, color);
        console.log(typeof this.bars.type)
        this.bars[type].push(tempBar);
        return tempBar;
    }
    
}



var moneyGraph = new Graph("display", "Utgift", "Summa");

button.onclick = function(){
    var type = document.getElementById("type").value;
    var category = document.getElementById("category").value;
    var amount = document.getElementById("money").value;
    var color = document.getElementById("color").value;

    var newBar = moneyGraph.addBar(type, category, amount, color);
    display.appendChild(newBar.htmlElement);
    console.log(newBar);
}