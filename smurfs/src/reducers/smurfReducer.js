import { ADD_SMURF, FETCH_SMURF } from '../actions/index.js';

const initialState = {
  smurfs: [
    {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  ]
};
export default function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          action.payload
          // {
          //   name: action.payload.name,
          //   age: action.payload.age,
          //   height: action.payload.height,
          //   id: action.payload.id
          // }
        ]
      };

    case FETCH_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          action.payload
          // {
          //   name: action.payload.name,
          //   age: action.payload.age,
          //   height: action.payload.height,
          //   id: action.payload.id
          // }
        ]
      };
    default:
      return state;
  }
}
