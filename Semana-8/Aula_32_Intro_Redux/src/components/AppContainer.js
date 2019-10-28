import React from 'react'
import TaskCard from './TaskFeature/TaskCard'
import styled from 'styled-components'

const MainWrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <MainWrapper>
			<h2>4Task</h2>
			<TaskCard />
		</MainWrapper>
	}
}