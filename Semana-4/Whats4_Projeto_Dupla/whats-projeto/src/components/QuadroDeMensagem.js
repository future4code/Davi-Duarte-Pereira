import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const QuadroContainer = styled.div`
    height: 10vh;

`

const BoldName = styled.span`
    font-weight: bold;
`


export function QuadroDeMensagem(props) {
    return (
        <QuadroContainer>
            <p>
            <BoldName>{props.usuario}</BoldName>
            {props.mensagem}
            </p>
        </QuadroContainer>


    )
}

QuadroDeMensagem.propTypes = {
    usuario: PropTypes.string.isRequired,
    mensagem: PropTypes.string
}