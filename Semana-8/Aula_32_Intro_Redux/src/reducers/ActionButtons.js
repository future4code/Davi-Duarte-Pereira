import { markAllAsCompleted, removeAllCompleted } from '../constants/constants'

const initialState = {
	markAllAsCompleted: false,
	removeAllCompleted: false,
}

const actionButtons = (state = initialState, action) => {
	switch (action.type) {
	  case markAllAsCompleted:
		return { ...state, markAllAsCompleted: true };
	  case removeAllCompleted:
		return { ...state, removeAllCompleted: true };
	  default:
		return state;
	}
};

export default actionButtons;