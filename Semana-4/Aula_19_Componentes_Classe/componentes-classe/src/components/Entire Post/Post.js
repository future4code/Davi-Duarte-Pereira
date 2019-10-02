import React from 'react';
import './Post.css';

export function Post(props) {
    return (
        <section>
            <img src={props.imageSource} />
            <p>{props.username}</p>
            {props.children}
        </section>
    );
}