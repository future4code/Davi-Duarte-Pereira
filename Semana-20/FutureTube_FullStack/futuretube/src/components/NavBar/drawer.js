import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import PublishIcon from '@material-ui/icons/Publish'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
})

export default function TemporaryDrawer(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <Fragment
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem button  onClick={props.onClickToGoToUpload}>
            <ListItemIcon><PublishIcon /></ListItemIcon>
            <ListItemText primary={'Upload a video'} />
          </ListItem>
          <ListItem button  onClick={props.onClickToGoToDelete}>
            <ListItemIcon><DeleteIcon /></ListItemIcon>
            <ListItemText primary={'Delete a video'} />
          </ListItem>
      </List>
      <Divider />
    </Fragment>
  )

  return (
    <Fragment>
      <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>     
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      
    </Fragment>
  )
}
