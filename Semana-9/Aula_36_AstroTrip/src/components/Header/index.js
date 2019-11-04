import React from 'react'

const Header = (props) => {
    return(
        <div>
            <span>AstroTrip - Explore the universe   </span>
            <img src='' alt='AstroTripsLogo' onClick={props.OnClickToHome}/>
            <span>   Trips</span>
            <span onClick={props.OnClickToAdmLogin}>Create a trip</span>
        </div>
    )
}

export default Header;