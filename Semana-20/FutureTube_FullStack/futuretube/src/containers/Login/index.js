import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import { PageWrapper } from '../../components/PageWrapper'
import { loginWithEmailAndPasswordForm } from '../../components/Forms/emailAndPassword'
import { Redirect } from 'react-router-dom'
import { FormGenerator } from '../../components/Forms'
import { StyledFormWrapper, FutureLogo, TubeLogo } from './styled'


export default class Login extends Component {

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

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={{pathname: '/home'}} />
    }
    return (
      <PageWrapper>
        <StyledFormWrapper>
          <FutureLogo>Future<TubeLogo>Tube</TubeLogo></FutureLogo>
          <FormGenerator 
            onSubmitNormalLogin={this.submitNormalLogin} 
            onSubmitGoogleLogin={this.submitGoogleLogin}
            formMapper={loginWithEmailAndPasswordForm}
            formMapValue={this.state[loginWithEmailAndPasswordForm.state]}
            onChangeMapFunc={this.handleInputInfo}
            onClickToSignUp={this.goToSignupPage} 
          />
        </StyledFormWrapper>
      </PageWrapper>
    )
  }
}