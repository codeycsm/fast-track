$("#fastData").hide();
let foundUser = findUser();
if (foundUser) {
  let user = JSON.parse(localStorage.getItem("fastTrack"));
  $("#username").html(user.username + "'s ");
  $.ajax({
    url: "/past-data",
    type: "POST",
    data: { user }
  }).then(function(result) {
    for (let i = 0; i < result.length; i++) {
      $("#fastData").append(`
        <div class="row pastData">
          <div class="col s4 center-align">
            ${moment(result[i].startTime).format("M/D/Y h:mm:ss a")}
          </div>
          <div class="col s4 center-align">
            ${moment(result[i].endTime).format("M/D/Y h:mm:ss a")}
          </div>
          <div class="col s4 center-align">
            ${moment(result[i].endTime).diff(
              moment(result[i].startTime),
              "hours"
            )} hour(s)
          </div>
        </div>
      `);
    }
  });
  $("#fastData").show();
} else {
  window.location = "/";
}
