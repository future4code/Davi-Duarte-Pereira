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

  goToDeleteVideo = () => {
    this.props.goToDeleteVideo()
  }

  logout = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <PageWrapper>
        <NavBar
         onClickLogout={this.logout}
         onClickToGoToUpload={this.goToUploads}
         onClickToGoToDelete={this.goToDeleteVideo}
        />
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
  goToUploads: () => dispatch(push(routes.uploadVideo)),
  goToDeleteVideo: () => dispatch(push(routes.deleteVideo))
})

export default connect(null, mapDispatchToProps)(Home)