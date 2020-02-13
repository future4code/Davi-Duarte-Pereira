import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import * as firebase from 'firebase/app'
import { PageWrapper } from '../../components/PageWrapper'
import NavBar from '../../components/NavBar'
import VideoThumbnail from '../../components/VideoThumbnail'
import { VideosWrapper } from './styled'
import { mockVideos } from '../../components/VideoThumbnail/mockVideos'

class Home extends Component {

  goToUploads = () => {
    this.props.goToUploads()
  }

  logout = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <PageWrapper>
        <NavBar onClickLogout={this.logout} />
        <button onClick={this.goToUploads}>Go to uploads</button>
        <VideosWrapper>
          {mockVideos.map((video) => {
            return(
              <VideoThumbnail thumbnailImg={video.img} thumbTitle={video.title}/>
            )
          })}
        </VideosWrapper>
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToUploads: () => dispatch(push(routes.uploadVideo))
})

export default connect(null, mapDispatchToProps)(Home)