import React, { Component } from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { Countries } from "../../constants/countries"
import { getTrips, getApplicationData } from '../../actions/trips'


// ESTILOS:
const ApplicationFormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;


const StyledTextField = styled(TextField)`
    width: 35%;
`;

const StyledSelectForTrips = styled.select`
    width: 35%;
`


// OBJETO PARA O FORM:
const applicationForm = [
    {
        name: "name",
        type: "text",
        label: "Your name",
        required: true,
        pattern: "^[a-zA-Z]{3,}",
        tittle: "Your name should have at least 3 characters.",
    },
    {
        name: "age",
        type: "number",
        label: "Age",
        required: true,
        pattern: false,
        tittle: "You need to have 18 years at least to apply.",
        min: 18
    },
    {
        name: "applicationText",
        type: "text",
        label: "Tell us why you should be selected.",
        required: true,
        pattern: "^[a-zA-Z\s\\.,]{30,}",
        tittle: "Your application text should have at least 30 characters.",
    },
    {
        name: "profession",
        type: "text",
        label: "What you do for a living?",
        required: true,
        pattern: "^[a-zA-Z]{10,}",
        tittle: "Your profession title should have at least 10 characters.",
    }
];

class ApplicationFormPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            form: {country: ""},
            trip: ""
        };
    };

    componentDidMount(){
        this.props.getTrips();
    }

    handleFieldChange = event => {
        const { name, value } = event.target;

        this.setState({form: {...this.state.form, [name]: value}});
    };

    handleTripInput = event => {
        this.setState({trip: event.target.value})
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.sendApplicationForm(this.state.trip, this.state.form);
    };

    render() {

        const { trips } = this.props

        return(
            <div>
            <Header
                OnClickToHome={this.props.goToHome} 
            />
            <ApplicationFormWrapper onSubmit={this.handleOnSubmit}>
                {applicationForm.map((input) => (
                        <StyledTextField
                         key={input.name} 
                         onChange={this.handleFieldChange} 
                         name={input.name} 
                         type={input.type} 
                         label={input.label} 
                         value={this.state.form[input.name] || ""}
                         inputProps={
                             {
                                 required: input.required,
                                 tittle: input.tittle,
                                 pattern: input.pattern,
                                 min: input.min
                             }
                         }
                        />
                )) }
                <Countries
                 name={"country"} 
                 onChange={this.handleFieldChange} 
                 value={this.state.form.country} 
                />
                <StyledSelectForTrips 
                 onChange={this.handleTripInput} 
                 value={this.state.trip}
                >
                    {trips.map((trip) => (
                        <option
                         key={trip.id} 
                         value={trip.id}
                        >
                         {trip.name} - {trip.planet}
                        </option>
                    ))}
                </StyledSelectForTrips>
                <Button type="submit">Submit</Button>
            </ApplicationFormWrapper>
            <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
      trips: state.trips
    }
}


function mapDispatchToProps(dispatch){
    return {
      goToHome: () => dispatch(push(routes.homePage)),
      getTrips: () => dispatch(getTrips()),
      sendApplicationForm: (id, data) => dispatch(getApplicationData(id, data)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage);  