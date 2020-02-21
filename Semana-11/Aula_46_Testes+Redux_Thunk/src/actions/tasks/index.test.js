import {createNewTask, getTasks} from "./index";

describe("Tasks action-creators", () => {
    it("Should create a new task", () => {
        const expectedResult = {
            type: "CREATE_NEW_TASK",
            payload: {
                id: "87154",
                text: "I am a unit test.",
                day: "Saturday"
            }
        };

        const result = createNewTask(
            "87154",
            "I am a unit test.",
            "Saturday"
        );
        expect(expectedResult).toMatchObject(result);
    });

    it("Should get all the tests", () => {
        const expectedResult = {
            type: "GET_TASKS",
            payload: {
                tasks: [
                    {
                    "id": "FyTyeFZzOKbXG6idloQV",
                    "day": "Friday",
                    "text": "Groceries"
                    },
                    {
                    "id": "KLycqOSuNCjKP9UGcXTO",
                    "text": "AstroDev e-mail",
                    "day": "Friday"
                    },
                ]
            }
        };
        const result = getTasks(expectedResult.payload.tasks);
        expect(result).toHaveLength(2);
    });

    it("Complete", () => {
        const expectedResult = {
            type: "COMPLETE_TODO",
            payload: {
                todoId: "1"
            }
        };
        const result = completeTodoAction("1");
        expect(expectedResult).toMatchObject(result);
    });
});