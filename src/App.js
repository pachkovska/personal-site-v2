import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import './App.css';

import NavBar from './components/NavBar.js';

class App extends Component {

  state = {
    active: '',
  }

  addActiveClass = (e) => {
    const clicked = e.target.id
    if(this.state.active === clicked) { 
        this.setState({active: ''});
    } else {
        this.setState({active: clicked})
   }
}

  render(){
  return (
    <div className="App">
      <NavBar
        active={this.state.active} 
        addActiveClass={this.addActiveClass}
      />
    </div>
  )};
}

export default App;
