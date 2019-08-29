$('.viewListing').on("click", function(){
    var id = $(this).attr('id');
    
        //send the GET request
        $.ajax({
            url: "/listings/" + id,
            type: "GET",
        }).then(function(data){

        });
});

$('#button-addon2').on('click', function(event) {
    // event.preventDefault();
    var zipVal = $('.zipCodeVal').val()
    console.log(zipVal);
    $.ajax("/listings" + zipVal, {
        type: "GET",
    }).then(function(data) {
        console.log(data);
    });
});
