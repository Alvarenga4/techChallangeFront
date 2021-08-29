import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo2Tony.png';
const Navbar=() => {
  return (
    <header className="navbar">

        <div className="logo">
            <img src={Logo} />
        </div>
        <nav className="navigation">
            {/* your navigation */}
        </nav>

    </header>
  )
};
export default Navbar;