import React, { Component } from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { getTrips, getApplicationData, createNewTrip } from '../../actions/trips'
import { Planets } from '../../components/Planets'


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
// 

// OBJETO PARA O FORM:
const applicationForm = [
    {
        name: "name",
        type: "text",
        label: "Set a name for the trip.",
        required: true,
        pattern: "^[a-zA-Z\s\\.,-]{5,}",
        tittle: "The name of the trip should have at least 5 characters.",
    },
    // {
    //     name: "date",
    //     type: "date",
    //     label: "When is it going to be?",
    //     required: true,
    //     pattern: "/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/",
    //     tittle: "Your application text should have at least 30 characters.",
    // },
    {
        name: "durationInDays",
        type: "number",
        label: "Duration in days",
        required: true,
        pattern: false,
        tittle: "The duration must be greater or equal to 50 days.",
        min: 50
    },
    {
        name: "description",
        type: "text",
        label: "Describe the trip.",
        required: true,
        pattern: "^[a-zA-Z\s\\.,-]{30,}",
        tittle: "The description should have at least 30 characters.",
    }
];

class CreateNewTripPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            form: {planet: "", date: ""},
        };
    };

    componentDidMount(){
        const token = window.localStorage.getItem("token");

        if (!token) {
            window.alert("You are not authorized to enter this page. Please, login first.");
            this.props.goToHome();
        }
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
        console.log(this.state.form);
        this.props.createNewTripForm(this.state.form);
    };

    render() {

        const { trips } = this.props

        return(
            <div>
            <Header
                OnClickToHome={this.props.goToHome}
                backToTripsListButton onClickToTripsList={this.props.goBackToTripsList} 
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
                <StyledTextField
                 type="date" 
                 name="date"
                 helperText="When is it going to be?" 
                 inputProps={{ min: new Date().getFullYear() + '-' + (Number(new Date().getMonth()) + 1) + '-' + Number(new Date().getDate()) }} 
                 onChange={this.handleFieldChange}
                 value={this.state.form.date}
                />
                <Planets
                 name={"planet"} 
                 onChange={this.handleFieldChange} 
                 value={this.state.form.planet} 
                />
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
      createNewTripForm: (data) => dispatch(createNewTrip(data)),
      goBackToTripsList: () => dispatch(push(routes.trips))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewTripPage);  