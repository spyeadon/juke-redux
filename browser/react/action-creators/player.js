import {START_PLAYING, STOP_PLAYING,SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from  '../constants.js';
import AUDIO from '../audio.js'
import {  skip } from '../utils'; 

function startPlaying(){
  return {type: START_PLAYING, isPlaying: true}
}
function stopPlaying(){
  return {type: STOP_PLAYING, isPlaying: false}
}
function setCurrentSong(song){
  return {type: SET_CURRENT_SONG, currentSong: song}
}
function setCurrentSongList(playlist){
  return {type: SET_LIST, currentSongList: playlist}
}

export const play = function(){
  return function (dispatch){
    AUDIO.play()
    dispatch(startPlaying())
  }
}
export const pause =function(){
   return function (dispatch){
    AUDIO.pause()
    dispatch(stopPlaying())
  }
}

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSongList(currentSongList));
  dispatch(setCurrentSong(currentSong));
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState().player;
  if (isPlaying) dispatch(pause()); 
  else dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList) =>
  (dispatch, getState) => {
    const { currentSong } = getState().player;
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else dispatch(toggle());
};

export const next = () => 
  (dispatch, getState) => {
    dispatch(startSong(...skip(1, getState().player)));
};

export const prev = () => 
  (dispatch, getState) => {
    dispatch(startSong(...skip(-1, getState().player)));
};