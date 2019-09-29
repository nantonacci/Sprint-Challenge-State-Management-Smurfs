import { connect } from 'react-redux';
import { createSmurf } from '../actions';
import NewSmurf from './NewSmurf';

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
