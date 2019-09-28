import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURF = 'FETCH_SMURF';

const apiUrl = 'http://localhost:3333/smurfs';

export const createSmurf = ({ name, age, height }) => {
  return dispatch => {
    return axios
      .post(apiUrl, { name, age, height })
      .then(response => {
        dispatch(createSmurfSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createSmurfSuccess = data => {
  return {
    type: ADD_SMURF,
    payload: {
      id: data.id,
      name: data.name,
      age: data.height,
      height: data.height
    }
  };
};

export const fetchSmurfs = smurfs => {
  return {
    type: FETCH_SMURF,
    smurfs
  };
};

export const fetchAllSmurfs = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        console.log(response);
        dispatch(fetchSmurfs(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
