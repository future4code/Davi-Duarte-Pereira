import React from 'react';
import styled from 'styled-components'

/* Apenas para testar se está funcionando o styled components */

const MainApp = styled.div`  
`

const Post = styled.section`  
`

const UsernameSection = styled.menu`  
`

const UsernameProfile = styled.p`
`

const Image = styled.img`
`

const ButtonsSection = styled.div`
`

const LikeButton = styled.img`
`

const ContadorLike = styled.p`
`

const CommentButton = styled.img`
`

const ContadorComment = styled.p`
`

const CommentSection = styled.div`
`

const NewPostForm = styled.div`
`

const UserName = styled.input`
`

const UserProfilePic = styled.input`
`

const UserPostPic = styled.input`
`

const NewPostButton = styled.button`
`

const NewPostArea = styled.ul`
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      botaoDoLike: 0,
      botaoDoComment: 0,
      sinalLike: './favorite.svg',
      sinalDislike: './favorite-white.svg',
      botaoDeComentario: './comment_icon.svg',
      botaoDeComentarioBoolean: false,
      listaDePosts: [],
      userName: '',
      urlProfilePic: '',
      urlPostPic: ''
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
  };

  showCommentSection = () => {
    const showCommentSection = this.state.botaoDeComentarioBoolean;

    const novoEstado = {
      botaoDeComentarioBoolean: !showCommentSection
    }

    this.setState(novoEstado);
  };

  onChangeUsername = (event) => {
    this.setState({UserName: event.target.value})
  }

  onChangeProfilePic = (event) => {
    this.setState({urlProfilePic: event.target.value})
  }

  onChangePostPic = (event) => {
    this.setState({urlPostPic: event.target.value})
  }

  render(){
    let inputTexto = '';
    let botaoEnviar = '';

    if(this.state.botaoDeComentarioBoolean) {
      inputTexto = (<input id="comment_input" type="text" placeholder="Escreva um comentário" />);
      botaoEnviar = (<button id="comment_button" onClick={this.darComment}>Enviar!</button>);
    }

    return (
      <MainApp>
        <Post>
          <UsernameSection>
            <UsernameProfile>Davi</UsernameProfile>
          </UsernameSection>
          <Image src="https://picsum.photos/300/300"/>
          <ButtonsSection>
            <LikeButton src={this.state.sinalDislike} onClick={this.darLike} />
            <ContadorLike>{this.state.botaoDoLike}</ContadorLike>
            <CommentButton src={this.state.botaoDeComentario} onClick={this.showCommentSection} />
            <ContadorComment>{this.state.botaoDoComment}</ContadorComment>
          </ButtonsSection>
          <CommentSection>
          {inputTexto}
          {botaoEnviar}
          </CommentSection>
        </Post>

        <NewPostForm>
        <UserName
          type="text"
          placeholder="Nome de usuário"
          value={this.state.userName}
          onChange={this.onChangeUsername}
        />
        <UserProfilePic
          type="text"
          placeholder="Url da foto do usuário"
          value={this.state.urlProfilePic}
          onChange={this.onChangeProfilePic}
        />
        <UserPostPic
          type="text"
          placeholder="Url da foto a ser postada"
          value={this.state.urlPostPic}
          onChange={this.onChangePostPic}
        />
        <NewPostButton>Postar!</NewPostButton>
        </NewPostForm>

        <NewPostArea>

        </NewPostArea>
      </MainApp>
    );
  };
}

export default App;
