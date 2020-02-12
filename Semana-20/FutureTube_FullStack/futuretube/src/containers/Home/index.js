import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import * as firebase from 'firebase/app'



class Home extends Component {

  goToUploads = () => {
    this.props.goToUploads()
  }

  logout = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div>
        <button onClick={this.goToUploads}>Go to uploads</button>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToUploads: () => dispatch(push(routes.uploadVideo))
})

export default connect(null, mapDispatchToProps)(Home)