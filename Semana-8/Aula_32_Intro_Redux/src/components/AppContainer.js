import React from 'react'
import TaskCard from './TaskFeature/TaskCard'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

const MainWrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(rootReducer, devTools);


export function AppContainer(){
	return (
		<Provider store={store}>
			<MainWrapper>
				<h2>4Task</h2>
				<TaskCard />
			</MainWrapper>
		</Provider>
	)
}