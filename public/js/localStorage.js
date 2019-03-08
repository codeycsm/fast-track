function saveUser(data) {
  let user = {
    id: data.id,
    username: data.username
  };
  localStorage.setItem("fastTrack", JSON.stringify(user));
}

function isLoggedIn() {
  let user = localStorage.getItem("fastTrack");
  if (!user) {
    return false;
  } else {
    return true;
  }
}

function getUser() {
  return JSON.parse(localStorage.getItem("fastTrack"));
}

function signOut() {
  localStorage.removeItem("fastTrack");
  window.location = "/";
}
