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
      userSection: 'Lista de cadastrados',
    }
  }

  showUserSection = () => {
    if (this.state.userSection === 'Lista de cadastrados') {
      this.setState({userSection: 'Cadastro de novos usuários'})
    } else {
      this.setState({userSection: 'Lista de cadastrados'})
    }
  }

  onChangeNameHandler = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeEmailHandler = (event) => {
    this.setState({email: event.target.value})
  }

  addNewUser = () => {
    // url: https://us-central1-future4-users.cloudfunctions.net/api/users/createUser
    // token: 2e5d5c8bae5833240293b84f2249cff3

    const newUserData = {
      name: this.state.name,
      email: this.state.email
    };

    const requestNewUser = axios.post(
      'https://us-central1-future4-users.cloudfunctions.net/api/users/createUser',
      newUserData, 
      { 
        headers: {
          'Content-type': 'application/json',
          'api-token': '2e5d5c8bae5833240293b84f2249cff3'
        }
      }
    );

    requestNewUser.then(response => {
      console.log(response);
      window.alert("O usuário foi criado com sucesso!");
      this.setState({
        email: '',
        name: ''
      })
    }).catch(error => {
      console.log(error);
      window.alert("Erro ao tentar criar um usuário novo. Verifique seu cadastro novamente.");
    });
  }

  render(){

    return (
      <MainAppContainer>
        <Button onClick={this.showUserSection}>{this.state.userSection}</Button>
        {this.state.userSection === 'Lista de cadastrados' ? 
            <SignIn 
              nameValue={this.state.name}
              onChangeNameHandler={this.onChangeNameHandler}
              emailValue={this.state.email}
              onChangeEmailHandler={this.onChangeEmailHandler}
              createNewUserOnClick={this.addNewUser}
            /> :
            <RegisteredUsers/> }
      </MainAppContainer>
    );
  }
}

export default App;
