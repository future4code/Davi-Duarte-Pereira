import React from 'react';
import styled from 'styled-components';

const SignInSection = styled.div`
    border: 1px solid black;
`

const Form = styled.form`
    margin: 10px;
`



export function SignIn(){
    return (
        <SignInSection>
            <Form>
                <label>Nome:</label>
                <input type='text' /><br />
                <label>E-mail:</label>
                <input type='text' /><br />
                <button>Enviar</button>
            </Form>            
        </SignInSection>
    );
}