import React from 'react';
import styled from 'styled-components';
import { InputDeMensagem } from './components/InputDeMensagem';
import { BigCard } from './components/BigCard';
import { QuadroDeMensagem } from './components/QuadroDeMensagem';

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

  render(){
    return (
      <MainAppContainer>
        <BigCard>
          <QuadroDeMensagem 
          />
          <InputDeMensagem 
            placeholderUsuario={"Nome"}
            placeholderMensagem={"Mensagem"}
            valorMensagem={"Teste"}
            valorUsuario={"Nome teste"}
          />
        </BigCard>
      </MainAppContainer> 
    );
  }
};

export default App;
