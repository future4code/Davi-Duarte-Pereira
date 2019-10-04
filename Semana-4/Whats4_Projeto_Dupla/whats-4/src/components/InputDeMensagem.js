import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerInput = styled.div`
    border: 1px solid black;
`
const InputUsuario = styled.input`
    border: 1px solid black;
`

const InputMensagem = styled.input`
    border: 1px solid black;
`

const BotaoDeEnvio = styled.button`
    background: orange;
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