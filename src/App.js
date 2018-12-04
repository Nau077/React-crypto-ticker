import React, { Component } from 'react';
import Tickers from './components/Tickers';
import HandleClick from './components/HandleClick';
import './App.css';


class App extends Component {
 
  render() {
   
    return (
      <div className="App">
      <div className="App-header" id="App-header">
       <h2>Crypto-ticker</h2>
      </div>

      <Tickers/>
      <HandleClick/>
      </div>
    );
  }
}

export default App;
