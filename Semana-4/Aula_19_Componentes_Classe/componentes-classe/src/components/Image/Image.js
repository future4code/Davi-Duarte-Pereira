import React from 'react';
import './Image.css';

export function Image(props) {
    return (
        <img id="imagem_post" src={props.imageSource} />
    );
}