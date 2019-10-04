import React from 'react';
import styled from 'styled-components';
import { InputDeMensagem } from './components/InputDeMensagem';
import { BigCard } from './components/BigCard';
import { QuadroDeMensagem } from './components/QuadroDeMensagem';
import { QuadroDeMensagemContainer } from './components/QuadroDeMensagemContainer';

const MainAppContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaDeMensagem: [],
      mensagem: "",
      usuarioNome: ""
    };
  }

  adicionarMensagem = () => {
    const mensagens = {
      mensagem: this.state.mensagem,
      usuarioNome: this.state.usuarioNome
    }

    const arrayDeMensagens = [...this.state.listaDeMensagem, mensagens]

    this.setState({
      listaDeMensagem: arrayDeMensagens,
      mensagem: '',
    })
  }

  onChangeUsuario = (event) => {
    this.setState({usuarioNome: event.target.value})
  }

  onChangeTexto = (event) => {
    this.setState({mensagem: event.target.value})
  }

  render(){
    const listaDeElementos = this.state.listaDeMensagem.map((item, index) => {
      return <QuadroDeMensagem key={index} usuario={item.usuarioNome} mensagem={item.mensagem} />
    })

    return (
      <MainAppContainer>
        <BigCard>
          <QuadroDeMensagemContainer>
            {listaDeElementos}
          </QuadroDeMensagemContainer>
          <InputDeMensagem 
            placeholderUsuario={"Nome"}
            placeholderMensagem={"Mensagem"}
            valueDaMensagem={this.state.mensagem}
            onChangeFunctionUser={this.onChangeUsuario}
            onChangeFunctionText={this.onChangeTexto}
            onClickFunction={this.adicionarMensagem}
          />
        </BigCard>
      </MainAppContainer> 
    );
  }
};

export default App;
