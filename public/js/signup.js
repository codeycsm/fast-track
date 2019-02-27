let $ = require("jquery");
$("#submit").on("click", function() {
  let username = $("#username").val();
  $("#signupStatus").empty();
  $.ajax({
    url: "/new-user",
    type: "POST",
    data: { username }
  }).done(function(result) {
    if (result === true) {
      $("#signupStatus").append("This Username already exists");
    }
  });
});
