import React from 'react'
import { useReduxState, Provider, useDispatch } from '../redux/react-redux-f4'

const initialState = {
	inputValue: '',
	isTaskChecked: false,
	pressedDelButton: false,
	pressedCheckAllTasks: false,
	pressedDeleteAllTasks: false,
	filterButton: '',
}

function reducer(state = initialState, action) {
	switch(action.type) {
		case "Teste":
			return "Teste"
		default:
			return state;
	}
}