import React, {useState} from 'react';
import './App.css';

import NavBar from './components/NavBar.js';

function App () {

    const [activeNav, setActiveNav] = useState('');

      const addActiveClass = (e) => {
        const clicked = e.target.id;
        if(activeNav === clicked) {
            setActiveNav('');
        } else {
            setActiveNav(clicked);
       }
    };
  return (
    <div className="App">
      <NavBar
        active={activeNav}
        addActiveClass={addActiveClass}
      />
    </div>
  )
}

export default App;
