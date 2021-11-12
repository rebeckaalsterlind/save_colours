export function logIn(user) {
  console.log('user in action: ', user);
  return {
    type: "SET_LOGIN",
    loggedIn: user.isTrue,
    user: user.user,
    username: user.username
  }
}

export function setProjectId(id) {
  return {
    type: "SET_PROJECTID",
    projectId: id
  }
}

export function setRoomId(id) {
  return {
    type: "SET_ROOMID",
    roomId: id
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

export function saveProject(updatedUser) {
  return {
    type: "SET_SAVEPROJECT",
    user: updatedUser.user
  }
}

export function saveColor(updatedUser) {
  return {
    type: "SET_SAVECOLOR",
    user: updatedUser.user
  }
}

export function addDelete(show) {
  return {
    type: "SET_ADDDELETE",
    addDelete: show
  }
}

export function deleteObject(updatedUser) {
  return {
    type: "SET_DELETEOBJECT",
    user: updatedUser.user
  }
}