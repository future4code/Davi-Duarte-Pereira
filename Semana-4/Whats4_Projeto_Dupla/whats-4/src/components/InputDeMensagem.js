import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerInput = styled.div`
    display: flex;
    margin: 0 10px 10px 10px;
`
const InputUsuario = styled.input`
    width: 100px;
    font-size: 16px;
    padding: 5px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 5px;
    margin-right: 10px;
`

const InputMensagem = styled.input`
    font-size: 16px;
    flex: 1 1 0%;
    padding: 8px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 5px;
    margin-right: 10px;
`

const BotaoDeEnvio = styled.button`
    font-size: 16px;
    font-weight: bold;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 5px;
    cursor: pointer;
`

export function InputDeMensagem(props) {
    return (
        <ContainerInput>
            <InputUsuario 
                type="text" 
                placeholder={props.placeholderUsuario} 
                onChange={props.onChangeFunctionUser} 
            />
            <InputMensagem 
                type="text" 
                placeholder={props.placeholderMensagem} 
                onChange={props.onChangeFunctionText} 
                value={props.valueDaMensagem} 
            />
            <BotaoDeEnvio onClick={props.onClickFunction}>Enviar mensagem</BotaoDeEnvio>
        </ContainerInput>
    );
}

InputDeMensagem.propTypes = {
    placeholderUsuario: PropTypes.string.isRequired,
    placeholderMensagem: PropTypes.string.isRequired,
    onChangeFunctionUser: PropTypes.func.isRequired,
    onChangeFunctionText: PropTypes.func.isRequired,
    onClickFunction: PropTypes.func.isRequired,
    valueDaMensagem: PropTypes.string.isRequired,
}