$(function () {

    $('#update').on('click', function (event) {
        event.preventDefault();
        console.log("inside update click");
        $("#newpricediv").css("display", "flex");
        $("#confirmUpdate").css("display", "flex");
        $("#cancel").css("display", "flex");
        $('#update').css("display", "none");
        $('#delete').css("display", "none");
    });

    $("#delete").on("click", function (event) {
        event.preventDefault();
        $("#confirmDelete").css("display", "flex");
        $("#cancel").css("display", "flex");
        $('#update').css("display", "none");
        $('#delete').css("display", "none");
    });

    $('#confirmUpdate').on('click', function (event) {
        event.preventDefault();
        console.log("inside confirmUpdate click");

        var id = $(this).data("product_id");
        var price = $("#newprice").val();

        if(price === ""){
         alert("Please enter a valid Price");
        }
        else{
        var newPrice = {
            price: price
        };

        console.log(id, price);

        $.ajax("/api/storage/" + id, {
            type: "PUT",
            data:newPrice
        }).then(
            function () {
                console.log("record updated");
                // Reload the page to get the updated list
                alert("Record Updated");
                location.reload();
            }
        );
        }

    });

    $('#confirmDelete').on('click', function (event) {
        event.preventDefault();
        console.log("inside confirmDelete click");

        var id = $(this).data("product_id");

        // Send the DELETE request.
        $.ajax("/api/storage/" + id,  {
          type: "DELETE"
        }).then(
          function() {
            console.log("record deleted", id);
            // Reload the page to get the updated list
            alert("Record deleted");
            location.reload();
           
          }
        );
      });

    

    $('#cancel').on('click', function (event) {
        event.preventDefault();
        console.log("inside cancel click");
        location.reload();   
    });

});