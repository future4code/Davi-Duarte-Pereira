import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { push } from "connected-react-router"
import { routes } from "../containers/Router";
import { connect } from "react-redux";
import FeedPage from "../containers/FeedPage";
import PostPage from "../containers/PostPage";
import SignUpPage from "../containers/SignUpPage";


class ProtectRouter extends Component {
    render(){
        const token = window.localStorage.getItem("token")
        
        const Router = <Route path={this.props.path} component={this.props.component} />
        
        const teste = (this.props.path !== routes.login && this.props.path !== routes.signUp)
        if (token === null && teste)
            this.props.goLogin()
        else{
            if ((this.props.path === routes.login ||
                this.props.path === routes.signUp) &&
                token !== null )
                    this.props.goFeed()
        }
        
        return(
            <div>
                {Router}
            </div>
        )
    }
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
    goLogin: () => dispatch(push(routes.login)),
    goFeed: () => dispatch(push(routes.feed))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProtectRouter);