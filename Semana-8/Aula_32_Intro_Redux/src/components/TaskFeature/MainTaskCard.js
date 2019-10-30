import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import TaskList from './TaskList'
import TaskFooter from './TaskFooter'
import Divider from '@material-ui/core/Divider'
import { connect } from 'react-redux'
import { addNewTaskAction } from '../../actions/Main'


const StyledCard = styled(Card)`
	width: 40%;
`

const StyledInput = styled.input`
	text-align: center;
	font-size: 25pt;
	background: transparent;
	border: none;
	width: 100%;
`


class MainTaskCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			taskValue: ''
		}
	}

	handleInputChange = (event) => {
		this.setState({taskValue: event.target.value});
	};

	submitTask = () => {
		this.props.addTask(this.state.taskValue);
		this.setState({taskValue: ''})
	}

	keyPress = (event) => {
		return event.key === "Enter" ? this.submitTask() : null ;
	};


	render(){
		return(
			<StyledCard>
				<StyledInput
				 placeholder={"O que deve ser feito?"} 
				 onChange={this.handleInputChange} 
				 value={this.state.taskValue} 
				 onKeyPress={this.keyPress}
				/>
				<Divider />
				<TaskList />
				<Divider />
				<TaskFooter />
			</StyledCard>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
	  addTask: text => dispatch(addNewTaskAction(text, Date.now(), false))
	};
};


export default connect(null, mapDispatchToProps)(MainTaskCard);