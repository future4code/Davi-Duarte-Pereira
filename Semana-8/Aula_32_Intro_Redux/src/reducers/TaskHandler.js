import { createNewTask, removeTask, unmarkAsCompleted, markAsCompleted } from '../constants/constants'

const initialState = {
	taskValue: "",
	createNewTask: false,
	removeTask: false,
	unmarkAsCompleted: false,
	markAsCompleted: false,
}

const taskHandler = (state = initialState, action) => {
	switch (action.type) {
	  case createNewTask:
		return { ...state, createNewTask: true };
	  case removeTask:
		return { ...state, removeTask: true };
	  case unmarkAsCompleted:
		return { ...state, unmarkAsCompleted: true };
	  case markAsCompleted:
		return { ...state, markAsCompleted: true };
	  case taskValue:
		return { ...state, taskValue: true };
	  default:
		return state;
	}
};

export default taskHandler;