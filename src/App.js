import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import './App.css';

import NavBar from './components/NavBar.js';

class App extends Component {

  state = {
  }

  render(){
  return (
    <div className="App">
      <NavBar 
      />
    </div>
  )};
}

export default App;
