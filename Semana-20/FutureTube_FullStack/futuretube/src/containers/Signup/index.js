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

class Signup extends Component {
  constructor(props){
    super(props)

    this.fileInput = React.createRef()

    this.state = {
      name: '',
      email: '',
      password: '',
    }
    
  }

  handleInputInfo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNormalSignup = async (e) => {
    e.preventDefault()

    const createdPhotoURL = await this.uploadFile()

    const { name, email, password } = this.state
    const { saveUser, birthdate } = this.props

    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      
      saveUser(name, email, password, birthdate, createdPhotoURL, result.user.uid)
    } catch (err) {
      console.log(err)
    }

    console.log(birthdate)
  }

  returnToHome = () => {
    this.props.returnToHome()
  }

  uploadFile = async () => {
    const storageRef = firebase.storage().ref()
  
    const newFileRef = storageRef.child(this.fileInput.current.files[0].name);
  
    const uploadResult = await newFileRef.put(this.fileInput.current.files[0]).catch(e => console.log('ERRO NO UPLOAD', e))
  
    const downloadUrl = await uploadResult.ref.getDownloadURL()
  
    return downloadUrl
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
          ref={this.fileInput}
        />
        </StyledFormWrapper>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  birthdate: state.dateForm.birthdate
})


const mapDispatchToProps = (dispatch) => ({
  saveUser: (
    name, 
    email, 
    password, 
    birthdate, 
    photo, 
    id
  ) => dispatch(signup(
    name, 
    email, 
    password, 
    birthdate, 
    photo, 
    id
  )),
  returnToHome: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)