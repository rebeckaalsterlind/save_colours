import reduce from '../reducers/index';
import { createStore } from 'redux';

const initialState = {loggedIn: false};
export const store = createStore(reduce, initialState);