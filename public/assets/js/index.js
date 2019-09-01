$('.viewListing').on("click", function(){
    var id = $(this).attr('id');
    
        //send the GET request
        $.ajax({
            url: "/listings/" + id,
            type: "GET",
        }).then(function(data){

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