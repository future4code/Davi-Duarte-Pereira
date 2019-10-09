import React from 'react';

class Etapa1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      submitValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({submitValue: event.target.value});
  }

  handleSubmit() {
    console.log('O grau de escolaridade é: ' + this.state.submitValue);
  }



  render(){
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form>
          <label>Qual é o seu nome?</label><br />
          <input type="text" placeholder="Insira seu nome aqui." /><br />
          <label>Qual é a sua idade?</label><br />
          <input type="text" placeholder="Insira a sua idade." /><br />
          <label>Qual é o seu email?</label><br />
          <input type="text" placeholder="Insira o seu email." /><br />
          <label>Selecione a situação acadêmica que mais se encaixa com você atualmente.</label><br />
          <select value={this.state.submitValue} onChange={this.handleChange}>
            <option value="EM_incompleto">Ensino médio incompleto</option>
            <option value="EM_completo">Ensino médio completo</option>
            <option value="ES_incompleto">Ensino superior incompleto</option>
            <option value="ES_completo">Ensino superior completo</option>
          </select><br />
          <button type="button" onClick={this.handleSubmit}>Continuar</button>
        </form>
      </div>
    )
  }
}

function Etapa2(props) {
  return (
    <div>
      <h1>ETAPA 2 - Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h1>
      <form>
        <label>Qual curso?</label><br />
        <input type="text" /><br />
        <label>Qual a unidade de ensino?</label><br />
        <input type="text" /><br />
      </form>
    </div>
  )
}

function Etapa3() {
  return (
    <div>
      <h1>O FORMULÁRIO ACABOU</h1>
      <p>Muito obrigado por participar!</p>
    </div>
  )
}

function MostraConteudo(props) {
  if (props.conteudo) {
    return <Etapa1 />;
  }
  return <Etapa2 />;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conteudoBoolean: true,
    }
  }

  trocaEtapa = () => {
    this.setState({
      conteudoBoolean: !this.state.conteudoBoolean
    })
  }

  render() {
    return (
      <div>
        <MostraConteudo conteudo={this.state.conteudoBoolean} />
        <button type="button" onClick={this.trocaEtapa}>Continuar</button>
      </div>
    )
  }
}


export default App;