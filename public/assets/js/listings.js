window.onscroll = function () { myFunction() };

var mapImage = document.getElementById("mapContainer");
var sticky = mapImage.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        mapImage.classList.add("sticky")
    } else {
        mapImage.classList.remove("sticky");
    }
}


$(document).ready(function () {
    $("span").click(function () {
        $("#mapContainer").toggle(myFunction());
        $("#mapContainer").toggleClass('col-lg-0');
        $("#cardsContainer").toggleClass('col-lg-12');
        $("#cardFluid").toggleClass('container');
    });

    var divs = $('.card');
    for (var i = 0; i < divs.length; i += 2) {
        divs.slice(i, i + 2).wrapAll('<div class="row"></div>');
    }
    $(".far").click(function () {
        console.log("hello");
        $(this).toggleClass('favMarker');
    });
});

