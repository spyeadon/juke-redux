import {SET_LYRICS} from '../constants';

const initialState = { text: '' };

function reducer (state = initialState, action) {
  //copies prevState into empty object
  const newState = Object.assign({}, state)

  switch(action.type){
    case SET_LYRICS: {
      //changes lyric property of newState to action.lyric
      newState.text = action.lyric;
      break;
    }
    default:{
      //in case there are no changes to the state
      return newState;
    }
  }

  return newState;
}
 export default reducer;
