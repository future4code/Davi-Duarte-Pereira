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
        this.props.getTrips()
    }

    render(){

        const {tripsss, goToDetailedPage} = this.props

        return(
            <div>
                <Header
                OnClickToHome={this.props.goToHome}
                admInfo admName={"AstroDev"}
                />
                <div>
                    <ul>
                        {tripsss && tripsss.map((trip) => (
                            <li
                             key={trip.id} 
                             onClick={() => this.props.getTripByIdAndGoToDetailedTripPage(trip.id)}
                            >
                             {trip.name} - {trip.planet}
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tripsss: state.trips
})

function mapDispatchToProps(dispatch){
    return {
        goToHome: () => dispatch(push(routes.homePage)),
        getTrips: () => dispatch(getTrips()),
        getTripByIdAndGoToDetailedTripPage: (id) => {
            dispatch(getTripById(id));
            dispatch(push(routes.tripDetails));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);