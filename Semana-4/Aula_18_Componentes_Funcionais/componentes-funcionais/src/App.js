import React from 'react';
import EmailLogo from './img/email.svg';
import HouseLogo from './img/house.svg';
import ExpandLogo from './img/expand.svg';
import './App.css';
import { Section } from './components/Section/Section';
import { BigCard } from './components/BigCard/BigCard';
import { SmallCard } from './components/SmallCard/SmallCard';
import { ImageButton } from './components/ImageButton/ImageButton';

function App() {
  return (
    <div className="App">
      <Section>
        <Section header={'Dados Pessoais'}/>
        <BigCard titulo={'Davi Duarte'} texto={'Olá, eu sou o Davi! Este é meu texto de teste.'} imagem={"https://picsum.photos/50/50"}/>
        <SmallCard imagem={EmailLogo} titulo={'Email: '} texto={'davi.future4@gmail.com'}/>
        <SmallCard imagem={HouseLogo} titulo={'Endereço: '} texto={'Rua do Davi, 375'}/>
        <ImageButton imagem={ExpandLogo} texto={'Ver mais'} />
      </Section>
      <Section>
        <Section header={'Experiências profissionais'}/>
        <p>Teste</p>
      </Section>
      <Section>
        <Section header={'Minhas redes sociais'}/>
        <p>Teste</p>
      </Section>
    </div>
  );
}

export default App;
