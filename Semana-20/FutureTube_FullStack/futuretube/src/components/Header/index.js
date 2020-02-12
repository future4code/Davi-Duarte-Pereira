import React from 'react'
import FutureTubeLogo from '../../style/futuretubelogo.svg'
import { HeaderLiner, FutureTubeImg, HeaderWrapper } from './styled'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'





export default function Header(props){
  return(
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            FutureTube
          </Typography>
        </Toolbar>
      </AppBar>
  )
}