/* 
* *************************
*
* @module
* @author
* @date
* @description
*
* *************************
*/
import { combineReducers } from "redux";

import healthReducer from './healthReducer';

const reducers = combineReducers({
  health: healthReducer,
});

export default reducers;

