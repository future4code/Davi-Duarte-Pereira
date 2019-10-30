import { combineReducers } from "redux"
import filters from './Filters'
import taskHandler from './TaskHandler'
import actionButtons from './ActionButtons'

const rootReducer = combineReducers ({
	filters: filters,
	tasks: taskHandler,
	actionButtons: actionButtons,
});

export default rootReducer;