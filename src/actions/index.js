export function logIn(user) {

  return {
    type: "SET_LOGIN",
    loggedIn: user.isTrue,
    username: user.username
  }
}

export function addColor(show) {

  return {
    type: "SET_ADDCOLOR",
    addColor: show,
    addProject: !show
  }
}

export function addProject(show) {

  return {
    type: "SET_ADDPROJECT",
    addColor: !show,
    addProject: show
  }
}

