$(".userlisting").on('click', function(event){
    var id = $(this).attr('id');

        //send the PUT request
        $.ajax({
            url: "/api/" + id,
            type: "GET",
        }).then(function(data){
            //reload the page to get the updated user information
        });
});
<<<<<<< HEAD
=======

// this activates the view listing button
$('.viewListing').on("click", function(){
    var id = $(this).attr('id');
    
        //send the GET request
        $.ajax({
            url: "/profile/listing/" + id,
            type: "GET",
        }).then(function(data){

        });
});
>>>>>>> a698ca66a6515b28f88fdf76261a2e36a7d605e1
