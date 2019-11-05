import React, { Component } from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class ApplicationFormPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            age: '',
            applicationText: '',
            profession: '',
            country: '',
            trip: '',
        };
    }

    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    render() {
        const { name, age, applicationText, profession, country, trip} = this.state;

        return(
            <div>
            <Header
                OnClickToHome={this.props.goToHome} 
            />
            <LoginWrapper>
                <TextField
                onChange={this.handleFieldChange}
                name="name"
                type="name"
                label="Name"
                value={name}
                />
                <TextField
                onChange={this.handleFieldChange}
                name="age"
                type="age"
                label="Age"
                value={age}
                />
                <TextField
                onChange={this.handleFieldChange}
                name="applicationText"
                type="applicationText"
                label="Application text"
                value={applicationText}
                />
                <TextField
                onChange={this.handleFieldChange}
                name="profession"
                type="profession"
                label="Profession"
                value={profession}
                />
                <TextField
                onChange={this.handleFieldChange}
                name="country"
                type="country"
                label="Country"
                value={country}
                />
                <TextField
                onChange={this.handleFieldChange}
                name="trip"
                type="trip"
                label="Trip"
                value={trip}
                />
                <Button>Send</Button>
            </LoginWrapper>
            <Footer />
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
      goToHome: () => dispatch(push(routes.homePage)),
    }
}
  
export default connect(null, mapDispatchToProps)(ApplicationFormPage);  