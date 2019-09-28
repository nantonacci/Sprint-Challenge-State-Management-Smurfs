import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf.js';

function SmurfList({ smurfs }) {
  if (!smurfs.length) {
    return <div>No Smurfs</div>;
  }
  return (
    <div>
      {smurfs.map(smurf => {
        return <Smurf smurf={smurf} key={smurf.id} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps)(SmurfList);
