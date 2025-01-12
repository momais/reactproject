import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Main from './Components/main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;