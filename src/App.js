import React, { Component } from 'react';
import './App.css';
import Navbar from './components/AppNavbar';
import Maps from './components/Maps';
import Map_AM from './components/Maps-amchats';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Map_AM />
        <hr />
        <Maps />
      </div>
    );
  }
}

export default App;
