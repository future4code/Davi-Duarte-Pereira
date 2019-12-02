import React, {Component} from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import { PageWrapper } from '../../components/PageWrapper'

class TripDetailedPage  extends Component{

    componentDidMount(){
        const token = window.localStorage.getItem("token");

        if (!token) {
            window.alert("You are not authorized to enter this page. Please, login first.");
            this.props.goToHome();
        }
    }

    render(){
    const {trip, tripCandidates} = this.props

        return (
            <PageWrapper>
                <Header
                    OnClickToHome={this.props.goToHome}
                    admInfo admName={"AstroDev"}
                    backToTripsListButton onClickToTripsList={this.props.goBackToTripsList} 
                />
                <Main>
                    <div>
                        <p>Name: {trip.name}</p>
                        <p>Description: {trip.description}</p>
                        <p>Planet: {trip.planet}</p>
                        <p>Duartion of the trip in days: {trip.durationInDays}</p>
                        <p>Date: {trip.date}</p>
                        <h3>Candidates: </h3>
                        {tripCandidates.map((candidate) => (
                            <div>
                                <h2>{candidate.name}</h2>
                                <p>Country: {candidate.country}</p>
                                <p>Application text: {candidate.applicationText}</p>
                                <p>{candidate.name} work as a {candidate.profession} and his age is {candidate.age}</p>
                            </div>
                        ))}
                    </div>
                </Main>
                <Footer />
            </PageWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    trip: state.detailedTrip.trip,
    tripCandidates: state.detailedTrip.trip.candidates
})

const mapDispatchToProps = (dispatch) => {
    return {
        goToHome: () => dispatch(push(routes.homePage)),
        goBackToTripsList: () => dispatch(push(routes.trips))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailedPage);