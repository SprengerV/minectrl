import React from 'react';
import './navbar.css'

function Navbar() {
  return (<>
    <nav className="navbar-expand-fluid bg-secondary d-flex flex-row-reverse">
      <a href="/" id="minectrl" className="navbar-brand">minectrl</a>
    </nav>
    <div id="bufferZone"></div>
 </>);  
}

export default Navbar;
