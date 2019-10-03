import React from 'react';
import './Buttons.css';

export function Buttons(props) {
    return (
        <div id="whole-buttons-section">
            <img id="like-button" src={props.likeButton} onClick={props.onClickButton} />
            <p id="like-contador">{props.contadorLike}</p>
            <img id="comment-button" src={props.commentButton} onClick={props.onClickComment} />
            <p id="comment-contador">{props.contadorComment}</p>
        </div>
    );
}