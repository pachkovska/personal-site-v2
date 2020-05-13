import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Contact from "./components/pages/Contact/Contact";
import {Route, Switch} from "react-router-dom";


function App () {

  return (
    <div className="App">
        <NavBar/>
        <Switch>
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </div>
  )
}

export default App;
