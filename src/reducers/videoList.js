import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  //takes in old state
  //where is it getting sample data?
  //our videoList action returns an object with the property of videos and value of a new videoList array
  switch(action.type) {
    case 'CHANGE_VIDEO_LIST' :
      let newState = state;
      newState.videos = action.videos;
      return newState;
    default:
      return state;

  }


};

export default videoListReducer;
