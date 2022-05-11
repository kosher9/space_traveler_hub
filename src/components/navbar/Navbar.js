import React from 'react';
import { NavLink } from 'react-router-dom';
import planetLogo from '../../image/planet3.png';

const Navbar = () => (
  <>
    <header className="flex justify-between items-center w-11/12 mx-auto pt-4">
      <div className="flex items-center gap-2">
        <img src={planetLogo} alt="LOGO" />
        <h1 className="text-3xl">Space Travelers&#39; Hub</h1>
      </div>

      <nav className="text-blue-600 flex items-center gap-4 text-lg">

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'underline' : 'no-underline')}
        >
          Rockets

        </NavLink>

        <hr className="border border-gray-600 w-0.5 h-5" />

        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'underline' : 'no-underline')}
        >
          Missions

        </NavLink>

        <hr className="border border-gray-600 w-0.5 h-5" />

        <NavLink
          to="/My Profile"
          className={({ isActive }) => (isActive ? 'underline' : 'no-underline')}
        >
          My Profile

        </NavLink>
      </nav>
    </header>
    <hr className="mx-5 mt-4 border" />
  </>
);

export default Navbar;
