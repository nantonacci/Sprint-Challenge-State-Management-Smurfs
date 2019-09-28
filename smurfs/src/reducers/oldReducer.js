import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from '../actions/oldActions';

const initialState = {
  smurfs: [
    // {
    //   name: '',
    //   age: '',
    //   height: '',
    //   id: ''
    // }
  ]
  //isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      console.log('start');
      return {
        ...state
        //isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      console.log('success', state.smurfs);
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

        // isFetching: false
      };
    case FETCH_SMURF_FAILURE:
      console.log('fail');
      return {
        ...state,
        error: action.payload
        // isFetching: false
      };
    default:
      return state;
  }
};
