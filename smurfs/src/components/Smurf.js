// Smurf.js

import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ smurf: { name, age, height, _id }, onDelete }) => {
  return (
    <div style={styles}>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
      {/* <button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(_id)}
      >
        Remove
      </button> */}
    </div>
  );
};
