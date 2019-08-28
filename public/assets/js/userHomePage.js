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
