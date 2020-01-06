"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("../JSON/JSONFileManager");
class MobileClass {
    constructor(startDate, endDate, teachers, students) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        ++MobileClass.counter;
    }
    generateNewCourse(startDate, endDate, teachers, students) {
        if (startDate && endDate && teachers && students) {
            try {
                const dbManager = new JSONFileManager_1.JSONFileManager("f4db.json");
                const mutableDatabase = dbManager.getJSONContent();
                const newClass = {
                    id: MobileClass.counter,
                    startsAt: startDate,
                    endsAt: endDate,
                    teachers: teachers,
                    students: students
                };
                mutableDatabase.classes.Mobile.push(newClass);
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
                    id: MobileClass.counter,
                    startsAt: this.startDate,
                    endsAt: this.endDate,
                    teachers: this.teachers,
                    students: this.students
                };
                mutableDatabase.classes.Mobile.push(newClass);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New class created successfuly.");
            }
            catch (error) {
                console.error(error);
            }
        }
    }
}
exports.MobileClass = MobileClass;
MobileClass.counter = 0;
//# sourceMappingURL=mobileClass.js.map