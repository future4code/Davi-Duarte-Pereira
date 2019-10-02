import React from 'react';
import './Post.css';

export function Post(props) {
    return (
        <section id="main-box">
            {props.children}
        </section>
    );
}