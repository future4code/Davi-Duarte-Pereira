import React, { Component } from 'react'
import { PageWrapper } from '../../components/PageWrapper'
import { StyledForm } from  './styled'

const loginForm = [
  {
    name: "email",
    type: "text",
    label: "E-mail",
    required: true,
    state: "email"
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    state: "password"
  }
]

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
    console.log('bla')
  }
  render() {
    console.log(this.state.email, this.state.password)
    return (
      <PageWrapper>
        <StyledForm onSubmit={this.submitNormalLogin}> 
        {loginForm.map((item) => {
          return (
            <input 
              name={item.name} 
              type={item.type}
              label={item.label}
              required={item.required}
              value={this.state[item.state]}
              onChange={this.handleInputInfo}
            />
          )
        })}
        <input type='submit'/>
        </StyledForm>
      </PageWrapper>
    )
  }
}