import React, { Component } from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTrips, getTripById } from '../../actions/trips'

class TripsList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const token = window.localStorage.getItem("token");

        if (!token) {
            window.alert("You are not authorized to enter this page. Please, login first.");
            this.props.goToHome();
        } else {
            this.props.getTrips();
        }
    }

    render(){

        const {tripsList} = this.props

        return(
            <div>
                <Header
                OnClickToHome={this.props.goToHome}
                admInfo admName={"AstroDev"}
                />
                <div>
                    <ul>
                        {tripsList && tripsList.map((trip) => (
                            <li
                             key={trip.id} 
                             onClick={() => this.props.getTripByIdAndGoToDetailedTripPage(trip.id)}
                            >
                             {trip.name} - {trip.planet}
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={this.props.goToCreateTripPage}>Create a new trip</button>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tripsList: state.trips
})

function mapDispatchToProps(dispatch){
    return {
        goToHome: () => dispatch(push(routes.homePage)),
        goToCreateTripPage: () => dispatch(push(routes.tripCreate)),
        getTrips: () => dispatch(getTrips()),
        getTripByIdAndGoToDetailedTripPage: (id) => {
            dispatch(getTripById(id));
            dispatch(push(routes.tripDetails));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);