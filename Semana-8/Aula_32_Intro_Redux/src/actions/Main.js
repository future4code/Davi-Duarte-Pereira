import { 
	unmarkAsCompleted, markAsCompleted, markAllAsCompleted, 
	filterAll, filterRemaining, filterCompleted, 
	removeAllCompleted, removeTask, createNewTask, setNewTask, addNewTask 
} from '../constants/constants'

export const unmarkAsCompletedAction = taskId => {
	return {
	  type: unmarkAsCompleted,
	  payload: {
		taskId: taskId
	  }
	};
};

export const markAsCompletedAction = taskId => {
	return {
	  type: markAsCompleted,
	  payload: {
		taskId: taskId
	  }
	};
};  

export const markAllAsCompletedAction = () => {
	return {
	  type: markAllAsCompleted,
	};
};  

export const filterAllAction = () => {
	return {
	  type: filterAll,
	};
};  

export const filterRemainingAction = () => {
	return {
	  type: filterRemaining,
	};
};  

export const filterCompletedAction = () => {
	return {
	  type: filterCompleted,
	};
};  

export const removeAllCompletedAction = () => {
	return {
	  type: removeAllCompleted,
	};
};  

export const removeTaskAction = id => {
	return {
	  type: removeTask,
	  payload: {
		taskId: id
	  }
	};
};  

export const addNewTaskAction = (text, id, taskFinished) => {
	return {
	  type: addNewTask,
	  payload: {
		  text: text,
		  id: id,
		  taskFinished: taskFinished
	  }
	};
};

export const setNewTaskAction = taskList => {
	return {
		type: setNewTask,
		payload: {
			taskList: taskList,
		}
	}
}