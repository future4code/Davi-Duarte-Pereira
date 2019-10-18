import React from 'react';
import styled from 'styled-components';

function Musics(props){
    return (
        <div>
            <p>{props.musicName}</p>
            <p>{props.musicArtist}</p>
        </div>
    )
}

export default Musics;