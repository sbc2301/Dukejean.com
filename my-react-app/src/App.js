import React from 'react';
import logo from './logo.svg';
import arm from './arm.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={arm} className="Record-Arm" alt="dukearm"/>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Dukejean: <code>I am fart JEAN</code> and deadpool
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=CXgU8ghjTx8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Fart
        </a>
      </header>
    </div>
  );
}

export default App;