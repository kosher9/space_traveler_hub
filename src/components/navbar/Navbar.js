import React from 'react';
import { NavLink } from 'react-router-dom';
import planetLogo from '../../image/planet3.png';

const Navbar = () => (
  <header>
    <img src={planetLogo} alt="LOGO" />
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'text-green-50 font-bold' : 'text-neutral-400 font-thin')}
      >
        Home

      </NavLink>
    </nav>
  </header>
);

export default Navbar;
