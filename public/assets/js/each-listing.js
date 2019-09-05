$('.date-input').dateDropper({
    roundtrip: true,
    disabledDays: "08/30/2019"
});

$(".far").click(function () {
    $(this).toggleClass('favorites');
});
