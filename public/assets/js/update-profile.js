$('.profile-update').on("click", function(event){
    event.preventDefault();

    var id = $(this).attr('id');
    var username = $('#username').val();
    var first = $('#firstname').val();
    var last = $('#lastname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();

    var newUserData = {
        customer_id: id, 
        first_name: first,
        last_name: last,
        username: username,
        email_address: email,
        phone_number: phone,
    };
    //send the PUT request
    $.ajax({
        url: "/api/customers/" + id,
        type: "PUT",
        data: newUserData
    }).then(function(data){
        //reload the page to get the updated user information
        location.reload();
    })
    
});

// Example starter JavaScript for disabling form submissions if there are invalid fields