import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import ClearIcon from '@material-ui/icons/Clear'

class Tasks extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	onClickClearButton = () => {
		this.props.clearTask(this.props.tasks.id)
	}

	render(){
		return(
			<List>
				<ListItem>
					<Checkbox />
					<ListItemText primary={this.props.tasks.text} />
					<ListItemSecondaryAction>
						<IconButton onClick={this.onClickClearButton}>
							<ClearIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		)
	}
}

export default Tasks;