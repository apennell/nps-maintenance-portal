import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Map from './Map.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Map />
      </div>
    );
  }
}

export default App;
