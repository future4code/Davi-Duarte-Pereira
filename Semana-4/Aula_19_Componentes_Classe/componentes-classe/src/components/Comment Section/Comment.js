import React from 'react';
import './Comment.css';

export function CommentSection(props) {
    return (
        <div id="comments-section">
            {props.children}
        </div>
    );
}