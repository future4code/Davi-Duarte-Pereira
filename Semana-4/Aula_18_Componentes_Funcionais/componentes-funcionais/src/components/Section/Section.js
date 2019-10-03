import React from 'react';
import './Section.css';

export function Section(props) {
    return (
        <section>
            <h2>{props.header}</h2>
            {props.children}
        </section>
    );
}