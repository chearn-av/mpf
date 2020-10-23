import React from 'react';
import './Input.scss'
import { Form } from 'react-bootstrap';

const Input = (props) => {
    return (
        <div className='input-field'>
            {props.label && <Form.Label className='input-label'>{props.label}</Form.Label>}
            <Form.Control placeholder="input text" type="text" className='simple-input' disabled={props.disabled} />
        </div>
       );
};

export default Input;