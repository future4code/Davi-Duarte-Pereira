import { createNewTask, removeTask, unmarkAsCompleted, markAsCompleted, setNewTask, addNewTask } from '../constants/constants'

const initialState = [
	{
		id: 1,
		text: 'Aprender Redux',
		taskFinished: false,
		clearTask: false,
	},
	{
		id: 2,
		text: 'Terminar o projeto',
		taskFinished: false,
		clearTask: false,
	}
]

const taskHandler = (state = initialState, action) => {
	switch (action.type) {
	  case addNewTask:
		  const newTask = {
			  text: action.payload.text,
			  id: action.payload.id,
			  taskFinished: action.payload.taskFinished
		  }
		  return [newTask, ...state]
		case setNewTask:
			return action.payload.taskList
		case removeTask:
			const newState = state.map(task => {
				if (task.id === action.payload.id) {
					return {
						...task,
						clearTask: true
					};
				} else {
					return task;
				}
			});
			return newState.filter(task => task.clearTask === false);
	  default:
		return state;
	}
};

export default taskHandler;