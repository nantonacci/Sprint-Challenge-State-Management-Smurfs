// smurfReducer.js

import { ADD_SMURF, FETCH_SMURF } from '../actions/types';

export default function smurfReducer(state = [], action) {
  switch (action.type) {
    case ADD_SMURF:
      return [...state, action.payload];
    // case DELETE_SMURF:
    //   return state.filter(smurf => smurf._id !== action.payload.id);
    case FETCH_SMURF:
      return action.smurfs;
    default:
      return state;
  }
}
