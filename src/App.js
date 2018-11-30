import React, { Component } from 'react';
import './App.css';
import Navbar from './components/AppNavbar';
import Map_AM from './components/Maps-amchats';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Map_AM />
      </div>
    );
  }
}

export default App;
