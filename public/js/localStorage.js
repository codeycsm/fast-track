function saveUser(data) {
  let user = {
    id: data.id,
    username: data.username
  };
  localStorage.setItem("fastTrack", JSON.stringify(user));
}

function findUser() {
  let user = localStorage.getItem("fastTrack");
  if (!user) {
    return false;
  } else {
    return true;
  }
}

function signOut() {
  localStorage.removeItem("fastTrack");
  window.location = "/";
}
