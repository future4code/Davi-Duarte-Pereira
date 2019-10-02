import React from 'react';
import './Image.css';

export function Image(props) {
    return (
        <img src={props.imageSource} />
    );
}