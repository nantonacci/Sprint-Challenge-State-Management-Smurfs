import React, { Component } from 'react';
import './App.css';
import CreateSmurf from './CreateSmurf';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateSmurf />
          </div>
          <div className="col-md-6">
            <SmurfList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
