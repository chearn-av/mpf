import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

/********************************************************
 * Dropdown Props
 * label: string
 * options: array [{eventKey: string, label: string}, ...]
*********************************************************/
function DropDown(props) {
  return (
    <div className="dropdown-component">
      {props.label && <div className="label">{props.label}</div>}
      <Dropdown>
        <Dropdown.Toggle className='dropdown' id="dropdownButton">Select</Dropdown.Toggle>
        <Dropdown.Menu>
          {props.options.map(option =>
            <Dropdown.Item eventKey={option.eventKey}>{option.label}</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

DropDown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default DropDown;