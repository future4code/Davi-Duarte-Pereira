import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import { PageWrapper } from '../../components/PageWrapper'
import { signupWithEmailAndPasswordForm } from '../../components/Forms/emailAndPassword'
import { StyledFormWrapper } from  './styled'
import { signup } from '../../actions/auth'
import { connect } from 'react-redux'
import { FormGenerator } from '../../components/Forms'
import Header from '../../components/Header'
import { push } from 'connected-react-router'
import { routes } from '../Router'

// TODO: TURN THIS INTO A HOOK
class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      birthday: '',
      photo: ''
    }
    
  }

  handleInputInfo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleDate = (e) => {
    this.setState({birthday: e.target.value})
  }

  // TODO: upload photo file to cloud storage
  submitNormalSignup = async (e) => {
    e.preventDefault()

    const { name, email, password, birthday, photo } = this.state
    const { saveUser } = this.props

    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      
      saveUser(name, email, password, birthday, photo, result.user.uid)
    } catch (err) {
      console.log(err)
    }
  }

  returnToHome = () => {
    this.props.returnToHome()
  }

  render() {
    return (
      <PageWrapper>
        <StyledFormWrapper>
        <Header onClickReturnToHome={this.returnToHome} />
        <FormGenerator
          normalButtonLabel={"Sign Up"}
          onClickNormalButton={this.submitNormalSignup}
          formMapper={signupWithEmailAndPasswordForm}
          formMapValue={this.state[signupWithEmailAndPasswordForm.state]}
          onChangeMapFunc={this.handleInputInfo}
          // dateValue={this.state.birthday}
          // onChangeDate={this.handleDate}
        />
        </StyledFormWrapper>
      </PageWrapper>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  saveUser: (
    name, 
    email, 
    password, 
    birthday, 
    photo, 
    id
  ) => dispatch(signup(
    name, 
    email, 
    password, 
    birthday, 
    photo, 
    id
  )),
  returnToHome: () => dispatch(push(routes.root))
})

export default connect(null, mapDispatchToProps)(Signup)