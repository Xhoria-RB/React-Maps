import React, { Component } from 'react';
import './App.css';
import Navbar from './components/AppNavbar';
import Maps from './components/Maps';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Maps />
        <hr />
      </div>
    );
  }
}

export default App;
