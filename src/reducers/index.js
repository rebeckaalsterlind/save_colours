
export default function reduce(state, action) {
  
  console.log('reducer', state);

  switch(action.type) {
    case "SET_LOGIN":
      return {
       ...state, 
       loggedIn: action.loggedIn,
       username: action.username
      }

    //turn into one case?
    case "SET_ADDCOLOR":
      return {
        ...state,
        addColor: action.addColor,
        addProject: action.addProject
      }

    case "SET_ADDPROJECT":
      return {
        ...state,
        addColor: action.addColor,
        addProject: action.addProject
      }

    default:
    return state

  }
}