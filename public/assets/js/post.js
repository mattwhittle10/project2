$(function () {

    $('#cancel').on('click', function (event) {
        event.preventDefault();
        console.log("Inside cancel");
        // $('.needs-validation').html('');
        location.reload();
    });
    
    'use strict';
    // window.addEventListener('load', function () {
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

                if (form.checkValidity() === true) {


                    // $("#submit").on("click", function (event) {
                    // Make sure to preventDefault on a submit event.
                    event.preventDefault();
                    var file_data = $('#img_url').prop('files')[0];
                    var form_data = new FormData();
                    form_data.append('image', file_data);

                                      
                    $.ajax("/upload", {
                        type: "POST",
                        data: form_data,
                        processData: false, // tell jQuery not to process the data
                        contentType: false,
                    }).then(
                        function (image) {
                            console.log("created new storage");
                            // Reload the page to get the updated list
                            console.log(image.imageUrl);
                            insertIntoTable(image.imageUrl);
                            alert("Storage Created");
                            location.reload();
                        }
                    );

                    // });
                }

            }, false);
        });
    }, false);

// });

$("#usrform").on("click", "#cancel", function(){


})

function insertIntoTable(image) {

    console.log($("#category").val());
    var secureVar = 0;
    var forSecure = $("#secure").val();

    if (forSecure === "Yes") {
        secureVar = 1;
    }

    var newStorage = {
        title: $("#title").val(),
        img_url: image,
        address: $("#address").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zip: $("#zip").val(),
        available: "1",
        price: $("#price").val(),
        category: $("#category").val(),
        secure: secureVar,
        description: $("#description").val(),
        customer_id: $("#customerId").val()
    }
    

    $.ajax("/api/storage/post", {
        type: "POST",
        data: newStorage
    }).then(
        function () {
            console.log("created new storage");
            // Reload the page to get the updated list
            location.reload();
        }
    );
}