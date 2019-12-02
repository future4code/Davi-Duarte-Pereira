import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { routes } from "../Router"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { login } from "../../actions/trips"
import Main from "../../components/Main"
import { PageWrapper } from "../../components/PageWrapper"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  autenticateLogin = () => {
    const { email, password } = this.state;
    const { requestLogin } = this.props;

    requestLogin(email, password);
    this.setState({email: "", password: ""})
  } 

  render() {
    const { email, password } = this.state;

    return (
      <PageWrapper>
        <Header
          OnClickToHome={this.props.goToHome} 
        />
        <Main>
          <LoginWrapper>
            <TextField
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
            />
            <TextField
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              value={password}
            />
            <Button onClick={this.autenticateLogin} variant='flat' color='primary'>Login</Button>
          </LoginWrapper>
        </Main>
        <Footer />
      </PageWrapper>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    goToHome: () => dispatch(push(routes.homePage)),
    requestLogin: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
