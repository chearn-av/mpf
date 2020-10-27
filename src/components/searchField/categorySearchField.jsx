import React from 'react';
import './categorySearchField.scss';
import { InputGroup, DropdownButton, Dropdown, Form } from 'react-bootstrap';

const categorySearchField = (props) => {
    return (
        <div class='category-search'>
            <InputGroup>
                {props.label && <Form.Label className='input-label'>{props.label}</Form.Label>}
                <Form.Control placeholder="input text" type="text" className='simple-input' disabled={props.disabled} />
                <DropdownButton className='dropdown' id="dropdownButton" title='Select'>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>These</Dropdown.Item>
                    <Dropdown.Item>Choices</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </div>
    );
}

export default categorySearchField;