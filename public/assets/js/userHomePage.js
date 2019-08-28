$('.reviews').on('click', function(){
    var id = $(this).attr("id");
    console.log("CLICK")
    $.ajax({
        url: "/api/" + id,
        type: "GET"
    })
  });

