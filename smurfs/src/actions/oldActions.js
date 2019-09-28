import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const fetchSmurf = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURF_START });
    setTimeout(() => {
      axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
          // console.log(res);
          dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data[0] });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: FETCH_SMURF_FAILURE,
            payload: err.message + ' fetching smurfs'
          });
        });
    }, 2000);

    // dispatch({ type: ADD_SMURF });
    // addSmurf(() => {
    //   axios
    //     .post('http://localhost:3333')
    //     .then(res => {
    //       console.log('posted data: ', res);
    //       dispatch({ type: ADD_SMURF, payload: res.data.smurf });
    //       console.log(res.data.smurf);
    //     })
    //     .catch(err => {
    //       console.log('add error ', err);
    //       dispatch({
    //         type: ADD_SMURF_FAILURE,
    //         payload: err.message + ' adding smurf'
    //       });
    //     });
    // });
  };
};
