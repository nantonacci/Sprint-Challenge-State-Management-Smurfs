// index.js

import { combineReducers } from 'redux';
import smurfs from './smurfReducer';

export default combineReducers({
  smurfs: smurfs
});
