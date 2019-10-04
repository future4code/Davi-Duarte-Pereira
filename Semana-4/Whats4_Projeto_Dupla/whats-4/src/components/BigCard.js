import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    background: #E5DDD5;

`

export function BigCard(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}