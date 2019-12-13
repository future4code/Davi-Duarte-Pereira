"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("../JSON/JSONFileManager");
class WebClass {
    constructor(startDate, endDate, teachers, students, id) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.id = id;
    }
    generateNewCourse(startDate, endDate, teachers, students, id) {
        if (startDate && endDate && id && teachers && students) {
            try {
                const dbManager = new JSONFileManager_1.JSONFileManager("f4db.json");
                const mutableDatabase = dbManager.getJSONContent();
                const newClass = {
                    id: id,
                    startsAt: startDate,
                    endsAt: endDate,
                    teachers: [teachers],
                    students: [students]
                };
                mutableDatabase.classes.WebFullStack.push(newClass);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New class created successfuly.");
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            try {
                const dbManager = new JSONFileManager_1.JSONFileManager("f4db.json");
                const mutableDatabase = dbManager.getJSONContent();
                const newClass = {
                    id: this.id,
                    startsAt: this.startDate,
                    endsAt: this.endDate,
                    teachers: [this.teachers],
                    students: [this.students]
                };
                mutableDatabase.classes.WebFullStack.push(newClass);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New class created successfuly.");
            }
            catch (error) {
                console.error(error);
            }
        }
    }
}
exports.WebClass = WebClass;
//# sourceMappingURL=webClass.js.map