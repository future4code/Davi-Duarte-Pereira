import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import TaskList from './TaskList'
import TaskFooter from './TaskFooter'
import Divider from '@material-ui/core/Divider'
import { connect } from 'react-redux'
import { createNewTask } from '../../actions/Main'


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


function TaskCard(props){

	const handleInputChange = (event) => {
		props.newTask(event.target.value);
	};

	return(
		<StyledCard>
			<StyledInput placeholder={"O que deve ser feito?"} onChange={handleInputChange} value={props.taskValue}/>
			<Divider />
			<TaskList />
			<Divider />
			<TaskFooter />
		</StyledCard>
	)
}

const mapStateToProps = state => {
	return {
		taskValue: state.taskHandler.taskValue
	};
};

const mapDispatchToProps = dispatch => {
	return {
	  newTask: planet => dispatch(changePlanetAction(planet))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);