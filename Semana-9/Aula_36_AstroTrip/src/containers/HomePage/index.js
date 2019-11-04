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
             OnClickToAdmLogin={props.GoToAdmLogin}
            />
            <Footer />
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        goToHome: () => dispatch(push(routes.homePage)),
        GoToAdmLogin: () => dispatch(push(routes.admLogin))
    }
}

export default connect(null, mapDispatchToProps)(HomePage);