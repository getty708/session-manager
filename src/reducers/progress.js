import { combineReducers } from 'redux'


// constants
import * as types from    '../constants/types';
import {GESTURE_SET} from '../constants/settings'


//
// Helper function
//
function shuffle(array){
  // deep copy
  const ary = array.slice();
  for (let i = ary.length - 1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    // ary[i] <-> ary[r]
    [ary[i], ary[r]] = [ary[r], ary[i]];
  }
  return ary;
}

function initGestureObj() {
  let gestureArray = shuffle(Object.assign([], GESTURE_SET));
  for(let key in gestureArray){
    gestureArray[key].status = "waiting";
  }
  const new_gestureObj = Object.assign({}, gestureArray)
  // console.log("gestureArray@progress", gestureArray);
  // console.log("new_gestureObj@progress", new_gestureObj);
  return new_gestureObj
}


function updateGestureStatus(gestureObj, key, new_status){
  let gestures = Object.assign({}, gestureObj);
  // console.log(gestures)
  gestures[key].status = new_status;
  // console.log("gestures@progress", gestures);
  return gestures
}

//
// Reducer
//
const initialState = {
  gestureObj: GESTURE_SET,
  numGestures: 0,
  current_gesture: 0,
  isInit: false,
  onSession: false,
};
// console.log("initialState@progress", initialState);

const progressReducer = (state = initialState, action) => {
  const key = state.current_gesture;

  switch (action.type){
     case types.INITIALIZE_SESSION:
      console.log('Reducer: INITIALIZE_SESSION');
      return {
        ...state,
        gestureObj: initGestureObj(),
        numGestures: GESTURE_SET.length,
        current_gesture: 0,
        isInit: true,
        onSession: true,
      };
    case types.UPDATE_STATUS:
      console.log("Reducer: update status", action.new_status);
      return {
        ...state,
        gestureArray: updateGestureStatus(state.gestureObj, key, action.new_status),
        current_gesture: (action.new_status == "done") ? key+1 : key-1,
      };
    case types.FINISH_SESSION:
      console.log("Reducer: finish session");
      return {
        ...state,
        gestureArray: updateGestureStatus(state.gestureObj, key, "done"),
        current_gesture: 0,
        isInit: false,
        onSession: false,
      };
    default:
      console.log("Reducer: default");
      return state;
   }
 };


export default progressReducer;
