import { SET_LYRICS } from '../constants.js';

function setLyrics(text){
  return {type: SET_LYRICS, lyric: text};
}

export { setLyrics };
