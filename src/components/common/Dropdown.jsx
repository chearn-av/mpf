import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

/********************************************************
 * Dropdown Props
 * label: string
 * options: array [{eventKey: string, label: string}, ...]
*********************************************************/
function DropDown(props) {
  return (
    <div className="dropdown-component">
      {props.label && <div className="label">{props.label}</div>}
      <Form.Control className="dropdown" as="select">
        {props.options.map(option =>
          <option className="dropdown-option">{option.label}</option>)}
      </Form.Control>
    </div >
  );
}

DropDown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default DropDown;