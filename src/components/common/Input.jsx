import React from 'react';
import './Input.css'

const Input = (props) => {
    return (
        <div>
            <input placeholder="input text" type="text" className='simple-input' disabled={props.disabled} />
        </div>
    );
};

export default Input;