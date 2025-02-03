import React, {useState} from 'react';
import logo from './logo.svg';
import arm from './arm.svg'
import './App.css';

function App() {

  const [text, setText] = useState("I AM DUKE JEAN");

  function Balls() {
    setText((prev) => (prev === "I AM DUKE JEAN" ? "I DUKE" : "I AM DUKE JEAN"));
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="PenisMunch">
          
        <img src={arm} className="Record-Arm" alt="dukearm"/>
        <img src={logo} className="App-logo" alt="logo" onClick={Balls} />
        <div>{text}</div>
        </div>
      </header>

    </div>
  );
}

export default App;