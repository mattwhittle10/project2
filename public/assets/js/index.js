$('.viewListing').on("click", function(){
    var id = $(this).attr('id');
    
        //send the GET request
        $.ajax({
            url: "/listings/" + id,
            type: "GET",
        }).then(function(data){

        });
});
