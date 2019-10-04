import React from 'react';
import styled from 'styled-components';
import { InputDeMensagem } from './components/InputDeMensagem';
import { BigCard } from './components/BigCard';

const MainAppContainer = styled.div`
  max-width: 100vw;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){

    return (
      <MainAppContainer>
        <BigCard>
          <div className="QuadroDeMensagens"></div>
          <InputDeMensagem />
        </BigCard>
      </MainAppContainer> 
    );
  }
};

export default App;
