import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../style/MainLogo.svg'

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 15%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    padding: 30px 0;
    border-bottom: 1px solid black;
    background: #495867;
`

const SloganP = styled.p`
    color: white;
`

const LeftSectionDiv = styled.div`
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
`

const CenterSectionDiv = styled.div`
    grid-column: 3 / 4;
    display: flex;
    justify-content: center;
`

const RightSectionDiv = styled.div`
    grid-column: 5 / 6;
    display: flex;
    justify-content: space-around;
`

const StyledLogo = styled.img`
    width: 75px;
    height: 75px;
    :hover{cursor: pointer};
`

const LinkedP = styled.p`
    :hover{cursor: pointer};
`



const Header = (props) => {

    const tripButton = props.tripButton ?
     <LinkedP onClick={props.onClickToAppForm}><u>Look for a trip</u></LinkedP> 
     : 
    null

    const createTripButton = props.createTripButton ?
     <LinkedP onClick={props.onClickToLogin}><u>Create a trip</u></LinkedP> 
     : 
    null

    const admInfo = props.admInfo?
     <p>Hello, {props.admName}</p> 
     :
    null

    const backToTripsListButton = props.backToTripsListButton ?
     <LinkedP onClick={props.onClickToTripsList}><u>Back to the trips page</u></LinkedP> 
     :
    null

    return(
        <HeaderWrapper>
            <LeftSectionDiv>
                <SloganP>AstroTrip - Explore the universe   </SloganP>
            </LeftSectionDiv>
            <CenterSectionDiv>
                <StyledLogo src={MainLogo} alt='AstroTripsLogo' onClick={props.OnClickToHome}/>
            </CenterSectionDiv>
            <RightSectionDiv>
                {admInfo}
                {backToTripsListButton}
                {tripButton}
                {createTripButton}
            </RightSectionDiv>
        </HeaderWrapper>
    )
}

export default Header;