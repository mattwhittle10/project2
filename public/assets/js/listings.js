window.onscroll = function () { myFunction() };

var mapImage = document.getElementById("mapImage");
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
        $("#mapImage").toggle();
    });

    var divs = $('.card');
    for (var i = 0; i < divs.length; i += 2) {
        divs.slice(i, i + 2).wrapAll('<div class="row"></div>');
    }

    $(".far").click(function () {
        $(this).toggleClass('favorites');
    });
});

$('#searchBtn').on("click", function() {
    var zip = $('.zipCodeVal').val();
    console.log(zip);
    $.ajax({
        url: "/listings/" + zip,
        type: "GET",
    }).then(function(data) {
        console.log(data);
    });
});
