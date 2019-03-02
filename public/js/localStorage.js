function saveUser(data) {
  let user = {
    id: data.id,
    username: data.username
  };
  localStorage.setItem("fastTrack", JSON.stringify(user));
  // localStorage.setItem("fastingId", JSON.stringify(data.id));
  console.log(`Save user function data ${user}`);
}

function findUser() {
  let user = localStorage.getItem("fastTrack");
  if (!user) {
    return false;
  } else {
    return true;
  }
}
