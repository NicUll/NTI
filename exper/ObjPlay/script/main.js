

var button = document.getElementById("add");
var display = document.getElementById("display");
display.style.height = "300px";





function createExtElement(type, id){
    /*
    var tempElement = '<' + type + ' id="' + id + '"></' + type + '>';*/
    var tempElement = document.createElement(type);
    tempElement.id = id;
    tempElement.className = "bar";
    return tempElement;
}

function getDisplayCeiling(max){
    var multi = 0;
    var ceiling = 10;
    
    for(;ceiling*10<max;multi++){
        ceiling *= 10;
    }
    return ((ceiling*5)>max ? ceiling*5 : ceiling*10); 
}

function setHeightRelative(element, value, relativeTo){
    element.style.height = (value/relativeTo)*100 + "%";
    console.log(element.style.height);
}

function Bar(id, label, value, color){
    this.id = id;
    this.label = label;
    this.value = value;
    this.color = color;

    this.htmlElement = createExtElement("div", this.id);
    this.htmlElement.style.background=this.color;
    this.htmlElement.innerHTML = "<p class='bar-value'>"+value+"</p><p class='bar-label'>"+label+"</p>";
    
}



function Graph(htmlid, xlabel, ylabel){
    this.id = htmlid;
    this.xlabel = xlabel;
    this.ylabel = ylabel;
    this.bars = {income:[],expense:[]};
    this.max = 0;
    this.maxDisplay = 0;
    
    this.addBar = function(type, label, value, color){
        var tempId = this.id + "-bar" + this.bars[type].length;
        var tempBar = new Bar(tempId, label, value, color);
        this.bars[type].push(tempBar);
        if(!this.checkIfNewMax(tempBar)){
            setHeightRelative(tempBar.htmlElement, tempBar.value, this.maxDisplay);
        }
        return tempBar;
    }
    
    this.checkIfNewMax = function(bar){
        if(bar.value > this.max){
            this.max = bar.value;
            this.maxDisplay = getDisplayCeiling(bar.value);
            this.updateHeights();
            return true;
        }else{
            return false;
        }
        
    }
    
    this.updateHeights = function(){
        for (var category in this.bars){
            var currentBars = this.bars[category];
            for(var i=0;i<currentBars.length;i++){
                var bar = currentBars[i];
                setHeightRelative(bar.htmlElement, bar.value, this.maxDisplay);
            }
        }
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