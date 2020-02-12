import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import { PageWrapper } from '../../components/PageWrapper'
import { signupWithEmailAndPasswordForm } from '../../components/Forms/emailAndPassword'
import { StyledForm } from  './styled'
import { signup } from '../../actions/auth'
import { connect } from 'react-redux'


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

  render() {
    return (
      <PageWrapper>
        <StyledForm onSubmit={this.submitNormalSignup}>
        {signupWithEmailAndPasswordForm.map((item) => {
          return (
            <input key={item.name} 
              name={item.name} 
              type={item.type}
              label={item.label}
              required={item.required}
              value={this.state[item.state]}
              onChange={this.handleInputInfo}
              placeholder={item.label}
            />
          )
        })}
        <input type='submit'/>
        </StyledForm>
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
  ))
})

export default connect(null, mapDispatchToProps)(Signup)