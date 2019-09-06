$('.date-input').dateDropper({
    roundtrip: true,
    maxYear: '2025',
    minYear: '2019',
    lock: 'from'
});

$(".far").click(function () {
    $(this).toggleClass('favorites');
});
