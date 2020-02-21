import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-davi";

export const requestTasks = () => async (dispatch) => {
    const request = await axios.get(baseUrl);


    dispatch(getTasks(request.data));
};

export const getTasks = (tasks) => ({
    type: "GET_TASKS",
    payload: {
        tasks,
    }
});

export const requestNewTask = (text, day) => async (dispatch) => {
    const data = {
        text,
        day
    };

    const request = await axios.post(
        baseUrl,
        data
    );

    dispatch(createNewTask(request.data.id, request.data.text, request.data.day));
};

export const createNewTask = (id, text, day) => ({
    type: "CREATE_NEW_TASK",
    payload: {
        id,
        text,
        day,
    }
});