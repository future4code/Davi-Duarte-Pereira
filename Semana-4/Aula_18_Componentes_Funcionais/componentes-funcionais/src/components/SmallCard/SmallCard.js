import React from 'react';
import './SmallCard.css';

export function SmallCard(props) {
    return (
        <div id="small-card">
            <img src={props.imagem}/>
            <p id="titulo">{props.titulo}</p>
            <p id="texto">{props.texto}</p>
        </div>
    );
}