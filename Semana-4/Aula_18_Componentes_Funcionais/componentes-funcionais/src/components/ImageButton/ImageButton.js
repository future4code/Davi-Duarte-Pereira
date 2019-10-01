import React from 'react';
import './ImageButton.css';

export function ImageButton(props) {
    return (
        <nav>
            <img src={props.imagem} />
            <p>{props.texto}</p>
        </nav>
    );
}