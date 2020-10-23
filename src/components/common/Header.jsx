import React from 'react';
import Dropdown from './Dropdown';
import logo from 'Icons/ic-merck-logo.svg';
import './Header.css';

function Header(props) {
  return (
    <div>
      <header className="header">
        <img className="header-logo" src={logo} alt="logo" />
        <h3 className="header-title">{props.title}</h3>
        {props.options &&
          <div className="header-country">
            <Dropdown options={props.options} />
          </div>
        }
      </header>
    </div>
  );
}

export default Header;