import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = exampleVideoData[0], action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //state comes in as an object with all the keys and values of the state current saved in the store
  //takes in the action object and creates a new state, updating value of the currentVideo key of the old state
  //does not modify old state
  switch(action.type) {
    case 'CHANGE_VIDEO' :
      return action.video;
    default:
      return state;

  }

};

export default currentVideoReducer;
