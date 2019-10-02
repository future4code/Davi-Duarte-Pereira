import React from 'react';
import './App.css';
import { Post } from './components/Entire Post/Post';
import { Image } from './components/Image/Image';
import { Buttons } from './components/Buttons Section/Buttons';
import { CommentSection } from './components/Comment Section/Comment';
import { Username } from './components/Username/Username';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      botaoDoLike: 0,
      botaoDoComment: 0,
      sinalLike: './favorite.svg',
      sinalDislike: './favorite-white.svg',
      botaoDeComentario: './comment_icon.svg',
      botaoDeComentarioBoolean: false
    };
  }

  darLike = () => {
    const like = 1;
    this.setState({
      botaoDoLike: like,
      sinalDislike: this.state.sinalLike
    })
    if (this.state.botaoDoLike === 1) {
      this.setState({
        botaoDoLike: 0,
        sinalDislike: './favorite-white.svg'
      })
    }
  };

  darComment = () => {
    const comentario = this.state.botaoDoComment;

    this.showCommentSection();
    this.setState({botaoDoComment: comentario + 1})
  }

  showCommentSection = () => {
    const showCommentSection = this.state.botaoDeComentarioBoolean;

    const novoEstado = {
      botaoDeComentarioBoolean: !showCommentSection
    }

    this.setState(novoEstado);
  };

  render(){
    let inputTexto = '';
    let botaoEnviar = '';

    if(this.state.botaoDeComentarioBoolean) {
      inputTexto = (<input id="comment_input" type="text" placeholder="Escreva um comentário" />);
      botaoEnviar = (<button id="comment_button" onClick={this.darComment}>Enviar!</button>);
    }

    return (
      <div className="App">
        <Post>
          <Username imageSource={'https://picsum.photos/25/25'} />
          <Username username={'Davi'} />
          <Image imageSource={'https://picsum.photos/300/300'} />
          <Buttons 
            likeButton={this.state.sinalDislike} onClickButton={this.darLike}
            contadorLike={this.state.botaoDoLike}

            commentButton={this.state.botaoDeComentario} onClickComment={this.showCommentSection}
            contadorComment={this.state.botaoDoComment}
          />
          <CommentSection>
          {inputTexto}
          {botaoEnviar}
          </CommentSection>
        </Post>
      </div>
    );
  };
}

export default App;
