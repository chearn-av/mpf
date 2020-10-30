import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = (props) => {
    return (
        <Form.Check custom type="checkbox" id={props.label} label={props.label} disabled={props.disabled}></Form.Check> 
    );
}

 export default Checkbox;