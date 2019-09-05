// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                    form.classList.add('was-validated');
                    if(form.checkValidity() === true){

    //Need some other validation
    
        //  $(".userUpdateButton").on("click",function(){
        //     event.preventDefault();
                        var id = $('.userUpdateButton').attr('id');
                        var username = $('#validationCustomUsername').val();
                        var first = $('#validationCustom01').val();
                        var last = $('#validationCustom02').val();
                        var email = $('#validationCustom03').val();
                        var phone = $('#validationCustom04').val();

                        var newUserData = {
                            customer_id: id,
                            first_name: first,
                            last_name: last,
                            username: username,
                            email_address: email,
                            phone_number: phone,
                        };
                        console.log(newUserData);
                        //send the PUT request
                        $.ajax({
                            url: "/api/customers/" + id,
                            type: "PUT",
                            data: newUserData
                        }).then(function (data) {
                            //reload the page to get the updated user information
                            location.reload();
                        })
                    
                }

            }, false);

            //these print everytime the page loads 

        });
    }, false);
})();