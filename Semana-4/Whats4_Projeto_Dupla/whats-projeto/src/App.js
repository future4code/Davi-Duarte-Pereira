import React from 'react';
import { InputDeMensagem } from './components/InputDeMensagem';
import { QuadroDeMensagem } from './components/QuadroDeMensagem'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mensagem: " aloooo",
      usuarioNome: "Caio :",
    };
  }

  render(){

    return (
      <div className="App">
        <div className="Container">
          <QuadroDeMensagem
            mensagem = {this.state.mensagem}
            usuario = {this.state.usuarioNome}
          />
          <InputDeMensagem />
        </div>
      </div> 
    );
  }
};

export default App;