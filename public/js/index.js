$(document).ready(function() {
  $("#signupModal").hide();
  $("#signinModal").hide();
  let foundUser = findUser();
  if (foundUser) {
    window.location = "/timer";
  } else {
    $("#signinModal").show();
  }
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
        }
      });
    }
  });

  $("#sign-in").on("click", function() {
    $("#signinModal").show();
    $("#signupModal").hide();
  });

  $("#sign-up").on("click", function() {
    $("#signupModal").show();
    $("#signinModal").hide();
  });
});
