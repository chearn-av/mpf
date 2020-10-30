import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.scss'

const MerckButton = (props) => {
    return (
        <div>
            {props.label &&
            <Button variant={props.variant} size={props.size}>
                {props.image && <img src={props.image} />}
               {props.label}
            </Button>}
        </div>
    );
};

export default MerckButton;// nothing here yet.
