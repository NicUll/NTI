window.onload = function () {
    var scrollStart = document.getElementById('js-header').offsetHeight;

    window.onscroll = function () {
        scrollFunction('top-menu', scrollStart)
    };
}

function scrollFunction(elementId, scrollStart) {
    var scrollObject = document.getElementById(elementId);
    var containerObject = document.getElementById('middle');

    if (document.body.scrollTop > scrollStart) {
        scrollObject.style.position = "fixed";
        scrollObject.style.width = containerObject.offsetWidth +"px";
        
    } else {
        scrollObject.style.position = "relative";
    }
}
