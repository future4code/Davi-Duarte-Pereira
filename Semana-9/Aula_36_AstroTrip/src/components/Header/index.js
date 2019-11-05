import React from 'react'

const Header = (props) => {

    const tripButton = props.tripButton ? <p onClick={props.onClickToAppForm}><u>Look for a trip</u></p> : null
    const createTripButton = props.createTripButton ? <p onClick={props.onClickToLogin}><u>Create a trip</u></p> : null
    const admInfo = props.admInfo? <p>Hello, {props.admName}</p> : null
    const backToTripsListButton = props.backToTripsListButton ? <p onClick={props.onClickToTripsList}><u>Back to the trips page</u></p> : null

    return(
        <div>
            <p>AstroTrip - Explore the universe   </p>
            <img src='https://picsum.photos/75/75' alt='AstroTripsLogo' onClick={props.OnClickToHome}/>
            {admInfo}
            {backToTripsListButton}
            {tripButton}
            {createTripButton}
            <hr />
        </div>
    )
}

export default Header;