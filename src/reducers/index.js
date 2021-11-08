
export default function reduce(state, action) {
  
  console.log('reducer action', action, "reducer state: ", state);

  switch(action.type) {
    case "SET_LOGIN":
      return {
       ...state, 
       loggedIn: action.loggedIn,
       username: action.username
      }

    case "SET_ADDCOLOR":
      return {
        ...state,
        addColor: action.addColor
      }

    case "SET_ADDPROJECT":
      return {
        ...state,
        addProject: action.addProject
      }

    default:
    return state

  }
}