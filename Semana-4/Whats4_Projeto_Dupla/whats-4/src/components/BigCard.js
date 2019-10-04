import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`

export function BigCard(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}