import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Dropdown from '../common/Dropdown';

const categorySearchField = (props) => {
  return (
    <div className='category-search'>
      <InputGroup>
        {props.label && <Form.Label className='input-label'>{props.label}</Form.Label>}
        <Form.Control placeholder="input text" type="text" className='simple-input' disabled={props.disabled} />
        <Dropdown options={props.options} />
      </InputGroup>
    </div>
  );
}

export default categorySearchField;