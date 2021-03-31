import React from 'react';
import logo from '../../assets/fallbackImage.jpg';
import { Link } from 'react-router-dom';
import './Header.sass';

export const NavigationBar = () => {
  return (
    <div className="header">
      <div className="brand">
        <img alt="Snikr" src={logo} height="50" />
        <div>Snikr</div>
      </div>
      <div className="menu">
        <Link className="menuItem" to="/">
          Home
        </Link>
        <Link className="menuItem" to="/compare">
          Compare
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
