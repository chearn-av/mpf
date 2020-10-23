import React from 'react';
import './Dropdown.css';

function Dropdown(props) {
  return (
    <div>
      {props.label && <div className="label">{props.label}</div>}
      <select className="dropdown" onChange={props.onChange ? props.onChange : null}>
        <option defaultValue disabled hidden key={0}>Select</option>
        {props.options.map((option, index) =>
          <option key={index + 1} value={option.value}>{option.title}</option>
        )}
      </select>
    </div>
  );
}

export default Dropdown;