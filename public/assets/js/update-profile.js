$('#profile-update').on("click", function(event){
    event.preventDefault();
    alert("you're data is almost changed");
    var username = $('#username').val();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var thumbnail = $('#thumbnail').val();

    console.log(username, firstname, lastname, email, phone, thumbnail);

});