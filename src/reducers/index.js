// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import homeState from './HomeStateReducer';
 import {routerReducer} from 'react-router-redux';


 const rootReducer = combineReducers({
   homeState,
   routing: routerReducer
 });

 export default rootReducer;
