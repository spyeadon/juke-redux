import { SET_LYRICS } from '../constants.js';
import axios from 'axios';

function setLyrics(text){
  return {type: SET_LYRICS, lyric: text};
}
export const fetchLyrics = function (artist, song) {
  return function (dispatch) { //get state???
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};


