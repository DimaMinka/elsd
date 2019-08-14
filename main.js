document.addEventListener("DOMContentLoaded", function () {
    var viewPortWidth = 1366;
    var winW = window.innerWidth;
    var initialScale = winW/viewPortWidth;
    var metaViewport = document.querySelectorAll('[name="viewport"]')[0];

    if(winW >=768 && winW <= 1366) {
        metaViewport.setAttribute('content', 'width=' + viewPortWidth + ', initial-scale=' + initialScale);
    }
});