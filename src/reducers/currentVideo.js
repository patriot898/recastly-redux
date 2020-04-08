import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //state comes in as an object with all the keys and values of the state current saved in the store
  //takes in the action object and creates a new state, updating value of the currentVideo key of the old state
  //does not modify old state
  switch(action.type) {
    case 'CHANGE_VIDEO' :
      let newState = state;
      newState.currentVideo = action.video;
      return newState;
    default:
      return state;

  }

};

export default currentVideoReducer;
