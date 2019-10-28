import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import ClearIcon from '@material-ui/icons/Clear'

function TaskList(){
	return(
		<List>
			<ListItem>
				<Checkbox />
				<ListItemText primary={'Teste'} />
				<ListItemSecondaryAction>
					<IconButton>
						<ClearIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	)
}

export default TaskList;