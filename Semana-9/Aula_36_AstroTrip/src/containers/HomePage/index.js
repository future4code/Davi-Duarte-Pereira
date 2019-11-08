import React from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import Main from '../../components/Main'
import { PageWrapper } from '../../components/PageWrapper'
import Planet1 from '../../style/planet1.svg'
import Planet2 from '../../style/planet2.svg'
import Planet3 from '../../style/planet3.svg'


const HomePageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(19, 1fr);
    grid-template-rows: repeat(9, 1fr);
`

const TextArea = styled.div`
    grid-column: 2 / 6;
    grid-row: 2 / 5;
`

const Planet1Div = styled.div`
    grid-column: 12 / 12;
    grid-row: 2 / 4;
`

const Planet2Div = styled.div`
    grid-column: 15 / 17;
    grid-row: 5 / 7;
`

const Planet3Div = styled.div`
    grid-column: 10 / 14;
    grid-row: 8 / 9;
`

const PlanetImg = styled.img`
    width: 200px;
    height: 200px;
`

const Title = styled.h1`
    color: white;
    font-size: 22pt;
`

const Paragraph = styled.p`
    color: white;
    font-size: 18pt;
`

const HomePage = (props) => {
    return(
        <PageWrapper>
            <Header
             OnClickToHome={props.goToHome}  
             onClickToLogin={props.goToLogin}
             onClickToAppForm={props.goToApplicationForm}
             tripButton
             createTripButton
            />
            <Main>
                <HomePageWrapper>
                    <TextArea>
                    <Title>Born to discover</Title>
                    <Paragraph>
                     Have you ever had a feeling of being so small in this huge universe? Of having discovered 
                     and experienced so little, when you have the whole galaxy to see and venture? 
                     AstroTrip is here for you. Our mission is to give human society the tools to do these missions, 
                     to experience new places, new planets, and even new galaxies (soon).{/* As a platform that connects  */}
                    </Paragraph>
                    </TextArea>
                    <Planet1Div>
                        <PlanetImg src={Planet1} />
                    </Planet1Div>
                    <Planet2Div>
                        <PlanetImg src={Planet2} />
                    </Planet2Div>
                    <Planet3Div>
                        <PlanetImg src={Planet3} />
                    </Planet3Div>
                </HomePageWrapper>
            </Main>
            <Footer />
        </PageWrapper>
    )
}

function mapDispatchToProps(dispatch){
    return {
        goToHome: () => dispatch(push(routes.homePage)),
        goToLogin: () => dispatch(push(routes.login)),
        goToApplicationForm: () => dispatch(push(routes.applicationForm)),
    }
}

export default connect(null, mapDispatchToProps)(HomePage);