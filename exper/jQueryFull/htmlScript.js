function (value) {
    return value == undefined ? (this[0] ? this[0].innerHTML : null) : this.empty().append(value);
}


function htmlExpand1(value){
    
    var retValue;
    
    if(value == undefined){
        retValue = (this[0] ? this[0].innerHTML : null);
    }
    else{
        retValue = this.empty().append(value);
    }
    
    return retValue;
}


function htmlExpand2(value){
    
    var retValue;
    
    if(value == undefined){
        if(this[0] == true){
            retValue = this[0].innerHTML;
        }
        else{
            retValue = null;
        }        
    }
    else{
        retValue = this.empty().append(value);
    }
    
    return retValue;
}



