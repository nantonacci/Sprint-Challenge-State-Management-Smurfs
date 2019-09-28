import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurf = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURF_START });
    setTimeout(() => {
      axios
        .get('http://localhost:3333')
        .then(res => {
          console.log(res);
          dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.smurf });
          console.log(res.data.smurf);
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: FETCH_SMURF_FAILURE,
            payload: err.message + ' fetching smurfs'
          });
        });
    }, 2000);
  };
};
