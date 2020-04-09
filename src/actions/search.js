import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return function(dispatch) {

    const dispatchNewVideoState = (videoList) => {
      dispatch(changeVideoList(videoList));
      dispatch(changeVideo(videoList[0]));
    }

    // call youtube with a callback to dispatch
    searchYouTube({key: YOUTUBE_API_KEY, query:q}, dispatchNewVideoState);
  }
};

export default handleVideoSearch;

//TODO:  Write an asynchronous action to handle a video search!

