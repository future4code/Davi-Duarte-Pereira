import React from 'react';
import { InputDeMensagem } from './components/InputDeMensagem';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){

    return (
      <div className="App">
        <div className="Container">
          <div className="QuadroDeMensagens"></div>
          <InputDeMensagem />
        </div>
      </div> 
    );
  }
};

export default App;
