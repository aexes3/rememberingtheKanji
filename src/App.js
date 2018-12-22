import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Container from './components/Container/Container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Container />
      </div>
    );
  }
}

export default App;
