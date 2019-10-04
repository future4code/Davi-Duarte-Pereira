import React from 'react';
import styled from 'styled-components'

/* Apenas para testar se está funcionando o styled components */

const MainApp = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;   
`

const Post = styled.section`
  border: 1px solid black;
  margin-top: 10px;
`

const UsernameSection = styled.menu`
  display: flex;
  margin: 10px 0;
  padding: 0;  
`

const UsernameProfile = styled.p`
  margin-left: 10px;
`

const UsernamePicture = styled.img`
  border-radius: 50%;
  border: 1px solid black;
`

const Image = styled.img`
`

const ButtonsSection = styled.div`
  display: flex;
`

const LikeButton = styled.img`
`

const ContadorLike = styled.p`
  flex-grow: 1;
`

const CommentButton = styled.img`
`

const ContadorComment = styled.p`
`

const CommentSection = styled.div`
`

const NewPostForm = styled.div`
`

const NewPostGreetings = styled.h1`
`

const NewPostGreetingsMessage = styled.p`
`

const UserName = styled.input`
`

const UserProfilePic = styled.input`
`

const UserPostPic = styled.input`
`

const NewPostButton = styled.button`
`

const NewPostArea = styled.div`
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

  adicionarPost = () => {
    const novoPost = {
      userName: this.state.userName,
      urlProfilePic: this.state.urlProfilePic,
      urlPostPic: this.state.urlPostPic
    }

    const copiaListaDePosts = [...this.state.listaDePosts, novoPost]

    this.setState({
      listaDePosts: copiaListaDePosts,
      userName: '',
      urlProfilePic: '',
      urlPostPic: ''
    })
  }

  onChangeUsername = (event) => {
    this.setState({userName: event.target.value})
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

    const listaDePostsRenderizados = this.state.listaDePosts.map((item, index) => {
      return <Post key={index}>
        <UsernameSection>
          <UsernamePicture src={item.urlProfilePic} />
          <UsernameProfile>{item.userName}</UsernameProfile>
        </UsernameSection>
        <Image src={item.urlPostPic} />
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
    })

    return (
      <MainApp>
        <NewPostForm>
        <NewPostGreetings>Novo post do insta4</NewPostGreetings>
        <NewPostGreetingsMessage>
          Bem vindo à plataforma do insta4! Gostaria de realizar um post? Preencha
          o formulário abaixo, e você verá a mágica acontecer.
        </NewPostGreetingsMessage>
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
        <NewPostButton onClick={this.adicionarPost}>Postar!</NewPostButton>
        </NewPostForm>

        <NewPostArea>
          {listaDePostsRenderizados}
        </NewPostArea>
      </MainApp>
    );
  };
}

export default App;
