import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Input from '@material-ui/core/Input'
import TaskList from './TaskList'
import TaskFooter from './TaskFooter'
import Divider from '@material-ui/core/Divider'

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


function TaskCard(){
	return(
		<StyledCard>
			<StyledInput placeholder={"O que deve ser feito?"} />
			<Divider />
			<TaskList />
			<Divider />
			<TaskFooter />
		</StyledCard>
	)
}

export default TaskCard;