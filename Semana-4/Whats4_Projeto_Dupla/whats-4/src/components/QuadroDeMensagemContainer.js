import React from 'react';
import styled from 'styled-components';


const QuadroContainer = styled.div`
    display: flex;
    flex-direction: column-reverse; 
    flex-grow: 1;
    padding: 20px;
`

export function QuadroDeMensagemContainer(props) {
    return (
        <QuadroContainer>
            {props.children}
        </QuadroContainer>
    )
}