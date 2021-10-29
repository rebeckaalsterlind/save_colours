import reduce from '../reducers/index';
import { createStore } from 'redux';

const initialState = {loggedIn: false, username: ""};
export const store = createStore(reduce, initialState);