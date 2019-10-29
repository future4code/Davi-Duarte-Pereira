import { 
	unmarkAsCompleted, markAsCompleted, markAllAsCompleted, 
	filterAll, filterRemaining, filterCompleted, 
	removeAllCompleted, removeTask, createNewTask 
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

export const removeTaskAction = taskId => {
	return {
	  type: removeTask,
	  payload: {
		taskId: taskId
	  }
	};
};  

export const createNewTask = (description, taskId) => {
	return {
	  type: unmarkAsCompleted,
	  payload: {
		  description: description,
		  taskId: taskId,
	  }
	};
};  