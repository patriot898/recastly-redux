import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

const initialState = {
  videoList : [],
  currentVideo : null
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
//do we initialize the state from the beginning and set store to the result of the createStore function, or do we export a function that calls createStore with our rootReducer and application of thunk as pre-filled
