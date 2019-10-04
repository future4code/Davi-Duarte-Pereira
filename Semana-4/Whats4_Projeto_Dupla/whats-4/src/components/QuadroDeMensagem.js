import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const BoldName = styled.span`
    font-weight: bold;
    
`

const MessageContainer = styled.div`
    max-width: 40%;
    text-align: left;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
    padding: 10px 15px;
    border-radius: 5px;
    margin: 10px 15px;
`


export function QuadroDeMensagem(props) {
    return (
        <MessageContainer>
        <BoldName>{props.usuario}</BoldName>
        <p>{props.mensagem}</p>
        </MessageContainer>
    )
}

QuadroDeMensagem.propTypes = {
    usuario: PropTypes.string.isRequired,
    mensagem: PropTypes.string
}