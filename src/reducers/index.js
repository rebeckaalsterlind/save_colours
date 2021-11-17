
export default function reduce(state, action) {

  switch(action.type) {
    case "SET_LOGIN":
      return {
       ...state, 
       loggedIn: action.loggedIn,
       user: action.user,
       username: action.username
      }

    case "SET_PROJECTID":
      return {
        ...state,
        projectId: action.projectId
      }

    case "SET_ROOMID":
      return {
        ...state,
        roomId: action.roomId
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