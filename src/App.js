import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
<Hero/>
<Work/>
<Portfolio/>



      </div>
    );
  }
}

export default App;
