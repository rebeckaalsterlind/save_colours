export function logIn(loginUser) {
  console.log("actions", loginUser)

  return {
    type: "SET_LOGIN",
    loggedIn: loginUser
  }
}
