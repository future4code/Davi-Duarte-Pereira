import React from 'react';
import styled from 'styled-components';

const UserSection = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

export function RegisteredUsers(props) {
    return (
        <div className="tela-de-lista-usuario">
          <div>
            <h2>Usuários Cadastrados</h2>
          </div>
          <UserSection>
            <p>{props.username}</p>
            <img src='aaaaa' alt="teste"/>
          </UserSection>
        </div>
    )
} 