import React from 'react';
import { UserSection} from './UserSection'
import axios from 'axios'



export class RegisteredUsers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      users: [],
    }
  }

  componentDidMount () {
    this.getUsers();
  }

  getUsers = () => {
    // url: https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers
    // token: 2e5d5c8bae5833240293b84f2249cff3

    const requestAllUsers = axios.get(
      'https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers',
      {
        headers: {
          'api-token': '2e5d5c8bae5833240293b84f2249cff3'
        }
      }
    );

    requestAllUsers.then(response => {
      console.log('Todos os users:', response.data.result);
      this.setState({
        users: response.data.result
      })
      console.log(this.state.users)
    }).catch(error => {
      console.log(error);
    });
  }

  deleteUser = (userId) => {
    // url: https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/string
    // token: 2e5d5c8bae5833240293b84f2249cff3

    const requestUserId = axios.delete(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${userId}`,
      {
        headers: {
          'api-token': '2e5d5c8bae5833240293b84f2249cff3'
        }
      }
    );

    requestUserId.then(() => {
      this.getUsers();
      window.alert('O usuário foi apagado com sucesso!')
    }).catch(error => {
      console.log(error);
    });
  }

  render(){
    const showUsers = this.state.users.map((usuario, i) => {
      return(
        <UserSection
         key={i} 
         username={usuario.name}
         deleteFunction={() => {this.deleteUser(usuario.id)}}
        />
      )
    })

    return (
        <div className="tela-de-lista-usuario">
          <div>
            <h2>Usuários Cadastrados</h2>
          </div>
          {showUsers}
        </div>
    )
  } 
}