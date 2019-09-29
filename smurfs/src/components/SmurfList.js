// SmurfList.js

import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
//import { deleteSmurf } from '../actions';

function SmurfList({ smurfs }) {
  if (!smurfs.length) {
    return <div>No Smurfs</div>;
  }
  return (
    <div>
      {smurfs.map(smurf => {
        return <Smurf smurf={smurf} key={smurf._id} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: id => {
//       dispatch(deleteSmurf(id));
//     }
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(SmurfList);
