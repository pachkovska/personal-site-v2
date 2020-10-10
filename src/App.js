import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import NavBar from './components/NavBar/NavBar.js';
import Contact from './components/pages/Contact/Contact';
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";


export default function App() {

  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </div>
  )
}
