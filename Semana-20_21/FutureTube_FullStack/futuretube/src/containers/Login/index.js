import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import { PageWrapper } from '../../components/PageWrapper'
import { loginWithEmailAndPasswordForm } from '../../components/Forms/emailAndPassword'
import { Redirect } from 'react-router-dom'
import { FormGenerator } from '../../components/Forms'
import { StyledFormWrapper } from './styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import Header from '../../components/Header'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputInfo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNormalLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      console.log("result", result)
    } catch (e) {
      console.log(e.message)
    }
  }
  // TODO: IMPLEMENT GOOGLE LOGIN WITH DATABASE
  submitGoogleLogin = async (e) => {
    try {
      e.preventDefault()
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      const result = await firebase.auth().signInWithPopup(googleProvider)
      console.log("whole result: ", result)
      console.log("user info: ", result.user)  
    } catch (err) {
      console.log(err)
    }
  }

  goToSignupPage = () => {
    this.props.goToSignupPage()
  }

  goToChangePasswordPage = () => {
    this.props.goToChangePasswordPage()
  }

  signInWithEnter = (e) => {
    if (e.key === "Enter") {
      this.submitNormalLogin(e)
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={{pathname: '/home'}} />
    }
    return (
      <PageWrapper>
        <StyledFormWrapper>
          <Header />
          <FormGenerator
            onKeyDown={this.signInWithEnter}
            googleButtonLabel={"Sign in with google"}
            normalButtonLabel={'Login'} 
            onClickNormalButton={this.submitNormalLogin} 
            onClickGoogleButton={this.submitGoogleLogin}
            formMapper={loginWithEmailAndPasswordForm}
            formMapValue={this.state[loginWithEmailAndPasswordForm.state]}
            onChangeMapFunc={this.handleInputInfo}
            onClickToSignUp={this.goToSignupPage}
            onClickToChangePassword={this.goToChangePasswordPage} 
          />
        </StyledFormWrapper>
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToSignupPage: () => dispatch(push(routes.signup)),
  goToChangePasswordPage: () => dispatch(push(routes.changePassword))
})

export default connect(null, mapDispatchToProps)(Login)