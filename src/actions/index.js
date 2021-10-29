export function logIn(user) {
  console.log("actions", user)

  return {
    type: "SET_LOGIN",
    loggedIn: user.isTrue,
    username: user.username
  }
}
