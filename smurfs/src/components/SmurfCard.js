import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions';

const SmurfCard = ({ fetchSmurf, smurfs, error }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  //   if (isFetching) {
  //     return (
  //       <p>
  //         <span role="img" aria-label="sparkles">
  //           ✨
  //         </span>
  //         loading smurfs
  //         <span role="img" aria-label="sparkles">
  //           ✨
  //         </span>
  //       </p>
  //     );
  //   }

  return (
    <>
      <h1>Smurfs:</h1>
      {smurfs.map(smurf => (
        <div key={smurf.id}>
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
      {console.log(smurfs)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf: fetchSmurf }
)(SmurfCard);
