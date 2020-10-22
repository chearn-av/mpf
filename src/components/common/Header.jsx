import React from 'react';
import Dropdown from './Dropdown';
import './Header.scss';

function Header(props) {
  return (
    <div>
      <header className="header">
        <h2 className="header-logo">Merck</h2>
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