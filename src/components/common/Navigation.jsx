import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation(props) {
  return (
    <div className='navigation'>
      <NavLink className="link" activeClassName="active-navigation" to="/" exact>
        <div className='navigation-option'>
          Patient Forecasts
        </div>
      </NavLink>
      <NavLink className="link" activeClassName="active-navigation" to="/pricing">
        <div className='navigation-option'>
          Pricing
        </div>
      </NavLink>
      <NavLink className="link" activeClassName="active-navigation" to="/Reports">
        <div className='navigation-option'>
          Reports
        </div>
      </NavLink>
    </div>
  );
}

export default Navigation;