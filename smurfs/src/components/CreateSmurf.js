import { connect } from 'react-redux';
import { createSmurf } from '../actions/index.js';
import NewSmurf from './NewSmurf.js';

const mapDispatchToProps = dispatch => {
  return {
    onAddSmurf: smurf => {
      dispatch(createSmurf(smurf));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewSmurf);
