// index.js

import { ADD_SMURF, FETCH_SMURF } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3333/smurfs';

export const createSmurf = ({ name, age, height }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}`, { name, age, height })
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
      age: data.age,
      height: data.height
    }
  };
};

// export const deleteSmurfSuccess = id => {
//   return {
//     type: DELETE_SMURF,
//     payload: {
//       id
//     }
//   };
// };

// export const deleteSmurf = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/delete/${id}`)
//       .then(response => {
//         dispatch(deleteSmurfSuccess(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };

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
        dispatch(fetchSmurfs(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
