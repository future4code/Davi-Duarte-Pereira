import React, {Fragment} from 'react'
import { Toolbar, AppBar, Typography, MenuItem, Menu } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { StyledEndIconButton, RightSection, StyledAvatarImg } from './styled'
import TemporaryDrawer from './drawer'

function ElevationScroll(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}


export default function NavBar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <TemporaryDrawer
             onClickToGoToUpload={props.onClickToGoToUpload} 
             onClickToGoToDelete={props.onClickToGoToDelete} 
            />
            <Typography variant="h6">FutureTube</Typography>
            <RightSection>
              <StyledEndIconButton edge="end" onClick={handleMenu}>
                <StyledAvatarImg src="https://i.picsum.photos/id/637/100/100.jpg" />
              </StyledEndIconButton>
              <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
              >
                <MenuItem onClick={props.onClickLogout}>Logout</MenuItem>
              </Menu>
            </RightSection>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
}
