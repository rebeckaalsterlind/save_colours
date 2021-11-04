import reduce from '../reducers/index';
import { createStore } from 'redux';

const initialState = {loggedIn: false, username: "", addColor: false, addProject: false};
export const store = createStore(reduce, initialState);