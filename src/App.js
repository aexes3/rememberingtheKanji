import React, { Component } from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
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
