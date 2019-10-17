import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MetaWeather from './components/MetaWeatherAPI/MetaWeather';

const MainContainer = styled.div`
  max-width: 100vw;
`


function App() {
  return (
    <MainContainer>
      <MetaWeather />
    </MainContainer>
  );
}

export default App;
