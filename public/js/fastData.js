
if(!isLoggedIn()) {
  window.location = '/';
}

$(document).ready(function() {

  let user = JSON.parse(localStorage.getItem("fastTrack"));
  $("#username").html(user.username + "'s ");
  $.ajax({
    url: "/past-data",
    type: "POST",
    data: { user }
  }).then(function(result) {
    for (let i = 0; i < result.length; i++) {
      $("#data-container").append(`
      <div class="row pastData">
        <div class="col s4 center-align text-color">
          ${moment(result[i].startTime).format("M/D/Y h:mm:ss a")}
        </div>
        <div class="col s4 center-align text-color">
          ${moment(result[i].endTime).format("M/D/Y h:mm:ss a")}
        </div>
        <div class="col s4 center-align text-color">
          ${formatTime(
            moment(result[i].endTime).diff(moment(result[i].startTime))
          )}
        </div>
      </div>
    `);
    }
  });

  $("#fastData").show();

  $("#logout").on("click", function() {
    signOut();
  });
});

$("#timerButton").on("click", function() {
  window.location = "/timer";
});

