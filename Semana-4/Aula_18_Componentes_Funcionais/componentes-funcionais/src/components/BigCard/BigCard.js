import React from 'react';
import './BigCard.css';

export function BigCard(props) {
    return (
        <main>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
            <img src={props.imagem}/>
        </main>
    );
}