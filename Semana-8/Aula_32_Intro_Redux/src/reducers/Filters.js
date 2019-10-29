import { filterAll, filterRemaining, filterCompleted} from '../constants/constants'

const initialState = {
	selectedFilter: null,
}

const filters = (state = initialState, action) => {
	switch (action.type) {
	  case filterAll:
		return { ...state, selectedFilter: filterAll };
	  case filterRemaining:
		return { ...state, selectedFilter: filterRemaining };
	  case filterCompleted:
		return { ...state, selectedFilter: filterCompleted };
	  default:
		return state;
	}
};

export default filters;