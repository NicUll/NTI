
function change(){
    var x_pos = Math.random()*(window.innerWidth);
    var y_pos = Math.random()*(window.innerHeight);
    
    
    document.getElementById("test-box").style.position = "absolute";
    document.getElementById("test-box").style.left = x_pos + "px";
    document.getElementById("test-box").style.top = y_pos + "px";

}

