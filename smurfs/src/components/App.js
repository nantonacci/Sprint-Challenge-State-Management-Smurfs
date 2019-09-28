import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
//import SmurfCard from './SmurfCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SmurfCard /> */}
        <SmurfList />
      </div>
    );
  }
}

export default App;
