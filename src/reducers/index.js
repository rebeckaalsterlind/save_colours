
export default function reduce(state, action) {
  
  console.log('reducer', state);

  switch(action.type) {
    case "SET_LOGIN":
      return {
       ...state, 
       loggedIn: action.loggedIn,
       username: action.username
      }
    
    default:
    return state

  }
}