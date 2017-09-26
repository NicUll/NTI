var rotation;

$(function () {
    rotation = 0;
    var nav = $('nav');
    nav.on('click', function () {
        rotateSlow(nav)
    });

});

function rotateSlow(item) {

    item.css('transform', 'rotate(-' + rotation + 'deg)');
    console.log(rotation);
    rotation++;
    if (rotation < 90) {
        setTimeout(function () {
            rotateSlow(item)
        }, 5);
    } else {
        item.find('.bar').animate({
            backgroundColor: "orange"
        }, 500);
    }
}
