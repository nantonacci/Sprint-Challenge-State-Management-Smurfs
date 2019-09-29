import React from 'react';
import { ADD_SMURF } from '../actions/types';

class NewSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.onAddSmurf(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="age"
              className="form-control"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="height"
              className="form-control"
              name="height"
              onChange={this.handleInputChange}
              value={this.state.height}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Smurf
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewSmurf;
