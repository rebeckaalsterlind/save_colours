import reduce from '../reducers/index';
import { createStore } from 'redux';

let isLoggedIn = false;
if(localStorage.getItem("userId")) isLoggedIn = true;

const initialState = {
  loggedIn: isLoggedIn, 
  user: {},
  username: "", 
  addColor: false, 
  addProject: false
};

export const store = createStore(reduce, initialState);