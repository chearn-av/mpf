import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <div>
      <header className="Header">
        <h2 className="Header-Logo">Merck</h2>
        <h3 className="Header-Title">{props.title}</h3>
        <form className="Header-Region">
          <select>
            {props.options.map(option =>
              <option value={option.value}>{option.title}</option>
            )}
          </select>
        </form>
      </header>
    </div>
  );
}

export default Header;