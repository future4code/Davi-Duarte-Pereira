import React from 'react'
import Tasks from './Tasks'
import { connect } from "react-redux"
import { removeTaskAction } from '../../actions/Main'

class TaskList extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return this.props.taskList.map(task => (
			<Tasks tasks={task} clearTask={this.props.onClearTask} />
		));
	};
};

const mapStateToProps = state => ({
	taskList: state.tasks
});

const mapDispatchToProps = dispatch => {
	return {
		onClearTask: id => dispatch(removeTaskAction(id))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);