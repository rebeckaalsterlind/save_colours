import reduce from '../reducers/index';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let isLoggedIn = false;
if (localStorage.getItem('userId')) isLoggedIn = true;

const initialState = {
    loggedIn: isLoggedIn,
    user: {},
    username: '',
    projectId: '',
    rommId: '',
    addColor: false,
    addProject: false,
};

export const store = createStore(reduce, initialState, composeWithDevTools());
