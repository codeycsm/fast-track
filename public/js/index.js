
if (isLoggedIn()) {
  window.location = "/timer";
}
else {
  $("#signInContainer").show();
}

$(document).ready(function() {
  //sign up click function
  $("#signupSubmit").on("click", function() {
    $("#signinStatus").empty();
    $("#signupStatus").empty();
    let username = $("#signupUsername").val();
    if (username === "") {
      $("#signupStatus").html("You must create a username first");
    } else {
      $("#signupStatus").empty();
      $.ajax({
        url: "/sign-up",
        type: "POST",
        data: { username }
      }).done(function(result) {
        if (result === true) {
          $("#signupStatus").append("This username already exists.");
        } else {
          saveUser(result);
          window.location = "/timer";
        }
      });
    }
  });
  // sign in click function
  $("#signinSubmit").on("click", function() {
    $("#signinStatus").empty();
    $("#signupStatus").empty();
    let username = $("#signinUsername").val();
    if (username === "") {
      $("#signinStatus").html("You must enter your username first");
    } else {
      $("#signinStatus").empty();
      $.ajax({
        url: "/sign-in",
        type: "POST",
        data: { username }
      }).done(function(results) {
        if (results === false) {
          $("#signinStatus").append("This username was not found.");
        } else {
          saveUser(results);
          window.location = "/timer";
        }
      });
    }
  });

  $("#sign-in").on("click", function() {
    $("#signInContainer").show();
    $("#signUpContainer").hide();
  });

  $("#sign-up").on("click", function() {
    $("#signUpContainer").show();
    $("#signInContainer").hide();
  });
});
