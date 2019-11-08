import React, { Component } from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTrips, getTripById } from '../../actions/trips'
import Main from '../../components/Main'
import { PageWrapper } from '../../components/PageWrapper'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import mercury from '../../style/mercury.svg'
import venus from '../../style/venus.svg'
import mars from '../../style/mars.svg'
import jupiter from '../../style/jupiter.svg'
import saturn from '../../style/saturn.svg'
import uranus from '../../style/uranus.svg'
import neptune from '../../style/neptune.svg'
import pluto from '../../style/pluto.svg'
import Background from '../../components/Background'
import Button from '@material-ui/core/Button'


const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledMercury = styled.img`
    width: 15px;
    height: 15px;
`

const StyledVenus = styled.img`
    width: 23px;
    height: 23px;
`

const StyledMars = styled.img`
    width: 20px;
    height: 20px;
`

const StyledJupiter = styled.img`
    width: 50px;
    height: 50px;
`

const StyledSaturn = styled.img`
    width: 40px;
    height: 40px;
`

const StyledUranus = styled.img`
    width: 35px;
    height: 35px;
`

const StyledNeptune = styled.img`
    width: 32px;
    height: 32px;
`

const StyledPluto = styled.img`
    width: 10px;
    height: 10px;
`

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

    planetSelector(planet){
        switch(planet){
            case "Mercury":
                return <StyledMercury src={mercury} />
            case "Venus":
                return <StyledVenus src={venus} />
            case "Mars":
                return <StyledMars src={mars} />
            case "Jupiter":
                return <StyledJupiter src={jupiter} />
            case "Saturn":
                return <StyledSaturn src={saturn} />
            case "Uranus":
                return <StyledUranus src={uranus} />
            case "Neptune":
                return <StyledNeptune src={neptune} />
            case "Pluto":
                return <StyledPluto src={pluto} />
            default:
                return <p>image not found</p>
            
        }
    }

    render(){

        const {tripsList} = this.props

        return(
            <PageWrapper>
                <Header
                OnClickToHome={this.props.goToHome}
                admInfo admName={"AstroDev"}
                />
                <Main>
                    <Background>
                        <ListWrapper>
                            <List>
                                {tripsList && tripsList.map((trip) => (
                                    <ListItem
                                    key={trip.id} 
                                    onClick={() => this.props.getTripByIdAndGoToDetailedTripPage(trip.id)}
                                    button
                                    >
                                        <ListItemIcon>
                                            {this.planetSelector(trip.planet)}
                                        </ListItemIcon>
                                        <ListItemText primary={trip.name + " - " + trip.planet} />
                                    </ListItem>
                                ))}
                            </List>
                        </ListWrapper>
                        <Button variant="contained" color="primary" onClick={this.props.goToCreateTripPage}>Create a new trip</Button>
                    </Background>
                </Main>
                <Footer />
            </PageWrapper>
        )
    }
}

{/*   */}

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