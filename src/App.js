import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Home from './mods/home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Home/>
        </div>
      </div>
    );
  }
}

export default App;
