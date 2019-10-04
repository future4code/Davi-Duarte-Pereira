import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerInput = styled.div`
    display: flex;
`
const InputUsuario = styled.input`
    border: 1px solid black;
    width: 20%;
`

const InputMensagem = styled.input`
    border: 1px solid black;
    width: 50%;
`

const BotaoDeEnvio = styled.button`
    flex-grow: 1;
`
export function InputDeMensagem(props) {
    return (
        <ContainerInput>
            <InputUsuario type="text" placeholder={props.placeholderUsuario} value={props.valorUsuario}/>
            <InputMensagem type="text" placeholder={props.placeholderMensagem} value={props.valorMensagem}/>
            <BotaoDeEnvio>Enviar mensagem!</BotaoDeEnvio>
        </ContainerInput>
    );
}

InputDeMensagem.propTypes = {
    placeholderUsuario: PropTypes.string.isRequired,
    placeholderMensagem: PropTypes.string.isRequired,
    valorUsuario: PropTypes.string,
    valorMensagem: PropTypes.string
}