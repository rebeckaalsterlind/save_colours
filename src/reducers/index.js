
export default function reduce(state, action) {

  console.log('action in reduce', action);

  switch(action.type) {
    case "SET_LOGIN":
      return {
       ...state, 
       loggedIn: action.loggedIn,
       user: action.user,
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
      
    case "SET_SAVECOLOR":
      return {
        ...state,
        user: action.user
      } 

    default:
    return state

  }
}