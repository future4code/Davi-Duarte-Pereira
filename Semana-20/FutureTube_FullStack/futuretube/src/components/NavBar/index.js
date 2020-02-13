import React, {Fragment} from 'react'
import { Toolbar, AppBar, Typography, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { StyledToolbar, StyledEndIconButton, RightSection, StyledAvatarImg } from './styled'
import Menu from '@material-ui/core/Menu'
import Drawer from '@material-ui/core/Drawer'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

// TODO: IMPLEMENT DRAWER.JS TO MANAGE THE ROUTES
export default function NavBar(props){

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <Fragment>
      <AppBar position="static">
        <StyledToolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FutureTube
          </Typography>
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
        </StyledToolbar>
      </AppBar>
    </Fragment>
  )
} 