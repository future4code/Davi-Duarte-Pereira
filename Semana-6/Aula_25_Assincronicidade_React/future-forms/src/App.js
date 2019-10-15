import React from 'react';
import { SignIn } from './components/Sign-Up-Page/SignIn';
import { RegisteredUsers } from './components/Signed-Users-Page/RegisteredUsers';
import axios from 'axios';
import styled from 'styled-components';

const MainAppContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  margin: 10px;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      userSection: false,
    }
  }

  showUserSection = () => {
    this.setState({userSection: !this.state.userSection})
  }

  render(){
    const showUser = this.state.userSection ? (<RegisteredUsers />) : (<SignIn />)


    return (
      <MainAppContainer>
        <Button onClick={this.showUserSection}>Mostrar a página de listas</Button>
        {showUser}
      </MainAppContainer>
    );
  }
}

export default App;
