import React from 'react';
import Dropdown from './Dropdown';
import logo from 'Icons/ic-merck-logo.svg';

function Header(props) {
  return (
    <div>
      <header className="header">
        <img className="header-logo" src={logo} alt="logo" />
        <div className="header-title">{props.title}</div>
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