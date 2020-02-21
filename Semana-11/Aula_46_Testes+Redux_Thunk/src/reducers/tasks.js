const initialState = [];


const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TASKS":
            return Array.from(action.payload.tasks);
        case "CREATE_NEW_TASK":
            const newTaskList = {
                id: action.payload.id,
                text: action.payload.text,
                day: action.payload.day
            };
            return [...state, newTaskList];
        default:
            return state;
    }
};

export default tasks;