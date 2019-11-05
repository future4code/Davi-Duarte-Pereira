import React from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from '../Router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const HomePage = (props) => {
    return(
        <div>
            <Header
             OnClickToHome={props.goToHome}  
             onClickToLogin={props.goToLogin}
             onClickToAppForm={props.goToApplicationForm}
             tripButton
             createTripButton
            />
            <Footer />
        </div>
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