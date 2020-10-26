import React from 'react';
import './Dropdown.css';
import { Dropdown } from 'react-bootstrap';

function DropDown(props) {
  return (
    <div>
      {props.label && <div className="label">{props.label}</div>}
      <Dropdown>
        <Dropdown.Toggle className='dropdown' id="dropdownButton">Select</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey='1'>U.S.</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Canada</Dropdown.Item>
          <Dropdown.Item eventKey='3'>France</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDown;

/*
 <select className="dropdown" onChange={props.onChange ? props.onChange : null}>
        <option defaultValue disabled hidden key={0}>Select</option>
        {props.options.map((option, index) =>
          <option key={index + 1} value={option.value}>{option.title}</option>
        )}
      </select>
 */