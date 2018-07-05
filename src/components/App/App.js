import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
