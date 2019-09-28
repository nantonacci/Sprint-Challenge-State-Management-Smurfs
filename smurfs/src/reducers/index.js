import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from '../actions';
import { FETCH_RECIPE_START } from '../../../../React-Redux-App/react-redux-app/src/actions';

const initialState = {
    smurfs: [
        {name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0}
    ]
    isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      console.log('start');
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      console.log('success');
      return {
        ...state,
        isFetching: false
      };
    case FETCH_SMURF_FAILURE:
      console.log('fail');
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
