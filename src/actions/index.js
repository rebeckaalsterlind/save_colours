export function logIn(user) {
  console.log('user in action: ', user);
  return {
    type: "SET_LOGIN",
    loggedIn: user.isTrue,
    user: user.user,
    username: user.username
  }
}

export function addColor(show) {
  return {
    type: "SET_ADDCOLOR",
    addColor: show
  }
}

export function addProject(show) {
  return {
    type: "SET_ADDPROJECT",
    addProject: show
  }
}

export function saveColor(updatedUser) {
  return {
    type: "SET_SAVECOLOR",
    user: updatedUser.user
  }
}
