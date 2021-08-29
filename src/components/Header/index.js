import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo2Tony.png';
const Navbar=() => {
  return (
    <nav className="navbar">

        <div className="logo">
            <img src={Logo} />
        </div>
        <nav className="navigation">
            {/* your navigation */}
        </nav>

    </nav>
  )
};
export default Navbar;