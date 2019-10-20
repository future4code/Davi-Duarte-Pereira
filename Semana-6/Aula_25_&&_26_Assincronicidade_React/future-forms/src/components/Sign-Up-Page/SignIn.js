import React from 'react';
import styled from 'styled-components';

const SignInSection = styled.div`
    border: 1px solid black;
`

const Form = styled.form`
    margin: 10px;
`

export function SignIn(props){
    return (
        <SignInSection>
            <Form>
                <label>Nome:</label>
                <input type='text' onChange={props.onChangeNameHandler} value={props.nameValue} /><br />
                <label>E-mail:</label>
                <input type='text' onChange={props.onChangeEmailHandler} value={props.emailValue} /><br />
                <button type="button" onClick={props.createNewUserOnClick}>Enviar</button>
            </Form>            
        </SignInSection>
    );
}