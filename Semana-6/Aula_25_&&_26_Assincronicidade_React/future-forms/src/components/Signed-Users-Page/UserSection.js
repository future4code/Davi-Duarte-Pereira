import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

const DeleteButton = styled.p`
  color: red;
`

export function UserSection(props) {
    return (
        <UserDiv>
            <p>{props.username}</p>
            <DeleteButton onClick={props.deleteFunction}>X</DeleteButton>
        </UserDiv>
    )
} 