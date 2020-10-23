import React from 'react';
import './Textarea.scss'
import { Form } from 'react-bootstrap';

const Textarea = (props) => {
    return (
        <div className='textarea-field'>
            {props.label && <Form.Label className='input-label'>{props.label}</Form.Label>}
            <Form.Control placeholder="input text" as='textarea' className='simple-input' disabled={props.disabled} />
        </div>
       );
};

export default Textarea;