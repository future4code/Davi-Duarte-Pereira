import React, { Component } from 'react'
import { PageWrapper } from '../../components/PageWrapper'
import { FormGenerator } from '../../components/Forms'
import { videoUploadForm } from '../../components/Forms/videoUpload'
import * as firebase from 'firebase/app'
import Header from '../../components/Header'
import { FormWrapper } from './styled'



export default class UploadVideo extends Component {
  constructor(props){
    super(props)

    this.fileInput = React.createRef()

    this.state = {
      videoUrl: "",
      title: "",
      description: ""
    }
  }


  handleInputInfo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  uploadWithEnter = (e) => {
    if (e.key === "Enter") {
      this.uploadVideo(e)
    }
  }

  uploadFile = async () => {
    const storageRef = firebase.storage().ref('/videos');
  
    const newFileRef = storageRef.child(this.fileInput.current.files[0].name);
  
    const uploadResult = await newFileRef.put(this.fileInput.current.files[0]).catch(e => console.log('ERRO NO UPLOAD', e))
  
    const downloadUrl = await uploadResult.ref.getDownloadURL()
  
    console.log(downloadUrl)
  }

  upload = () => {
    console.log("not implemented yet")
  }
  

  render() {
    return (
      <PageWrapper>
        <FormWrapper>
          <Header/>
          <FormGenerator 
            onKeyDown={this.uploadWithEnter} 
            formMapper={videoUploadForm} 
            formMapValue={this.state[videoUploadForm.state]}
            onChangeMapFunc={this.handleInputInfo}
            normalButtonLabel={'Upload'}
            onClickNormalButton={this.upload}  
          />
        </FormWrapper>
      </PageWrapper>
    )
  }
}