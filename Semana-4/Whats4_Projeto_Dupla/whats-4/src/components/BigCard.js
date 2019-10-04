import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    border: 1px solid blue;
    display: flex;
    align-items: flex-end;
`

export function BigCard(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}