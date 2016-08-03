import {MENU_DEPLOYED, MODIFY_MENU_BUTTON_SIZE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function homeStateReducer(state = initialState.homeState, action) {
  let newState;

  switch (action.type) {
    case MENU_DEPLOYED:
      newState = objectAssign({}, state);
      newState.menuDeployed = !state.menuDeployed;
      return newState;

    case MODIFY_MENU_BUTTON_SIZE:
      newState = objectAssign({}, state);
      newState.menuButtonSize = action.size;
      return newState;


    default:
      return state;
  }
}
