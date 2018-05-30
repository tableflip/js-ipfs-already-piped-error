import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ipfs from 'ipfs'

class App extends Component {
  componentDidMount() {
    const ipfs = new Ipfs()
    ipfs.on('ready', (err1) => {
      ipfs.version((err2, ver) => {
        console.log(ver, err1, err2)
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
