import React from 'react';
import './Checklist.scss';
import { Form } from 'react-bootstrap'
import Checkbox from '../common/Checkbox'

const ChecklistItems = (props) => {
    return props.list.map((listItem, index) => (
        <Checkbox key={index} label={listItem}/>      
    ));
}

const Checklist = (props) => {
    return (
        <div className='check-list'>
            {props.label && <Form.Label className='check-list-label'>{props.label}</Form.Label>}
            <ChecklistItems list={props.list}/> 
        </div>
        
    );
}

 export default Checklist;