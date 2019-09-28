import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import NewSmurf from './NewSmurf';
//import SmurfCard from './SmurfCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SmurfCard /> */}
        <SmurfList />
        <NewSmurf />
      </div>
    );
  }
}

export default App;
