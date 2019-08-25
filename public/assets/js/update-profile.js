$('#profile-update').on("submit", function(event){
    event.preventDefault();
    alert("you're data is almost changed");
    var newCustomer = {
        first_name: $('#firstname').val().trim(),
        last_name: $('#lastname').val().trim(),
        username: $('#username').val().trim(),
        email_address: $('#email').val().trim(),
        phone_number: $('#phone').val().trim(),
        thumbnail: $('#thumbnail').val().trim()
    };
    console.log(newCustomer);

    $.ajax('/api/users/' + id, { //WHAT IS ID??
        type: "PUT",
        data: newCustomer,
    }).then(
        function(){
            console.log("updated user data");
            location.reload();
        }
    )

});

// Example starter JavaScript for disabling form submissions if there are invalid fields