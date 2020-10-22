import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/ag-grid-enterprise/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-enterprise/dist/styles/ag-theme-material.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merck
        </a>
      </header>
    </div>
  );
}

export default App;
