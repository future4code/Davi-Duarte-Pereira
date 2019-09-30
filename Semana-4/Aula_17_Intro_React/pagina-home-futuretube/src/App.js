import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Future Tube</h1>
        <input type="text" placeholder="Busca"/>
      </header>
        <aside>
          <p>Inicio</p>
          <p>Em alta</p>
          <p>Inscrições</p>
          <p>Originais</p>
          <p id="line-break"></p>
          <p>Biblioteca</p>
          <p>Histórico</p>
        </aside>
        <menu>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=124214" alt="image 1"/>
            <p>Content 1</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=2653" alt="image 1"/>
            <p>Content 2</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=2545" alt="image 1"/>
            <p>Content 3</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=2456" alt="image 1"/>
            <p>Content 4</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=254" alt="image 1"/>
            <p>Content 5</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=2334" alt="image 1"/>
            <p>Content 6</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=231" alt="image 1"/>
            <p>Content 7</p>
          </div>
          <div className="Videos">
            <img src="https://picsum.photos/275/110?v=233" alt="image 1"/>
            <p>Content 8</p>
          </div>
        </menu>
      <footer><p>Powered by <a href="http://future4.com.br" target="_blank" rel="noopener noreferrer">Future4</a></p></footer>
    </div>
  );
}

export default App;
