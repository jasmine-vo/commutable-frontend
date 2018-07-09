import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { getStations } from '../../utils/api';

class App extends Component {

  state = {
    stations: []
  }

  componentDidMount() {
    getStations()
      .then(data => this.setState({ stations: data }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          stations={this.state.stations}
        />
      </div>
    );
  }
}

export default App;
