
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">NYSL</span>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/games" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Schedule
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;