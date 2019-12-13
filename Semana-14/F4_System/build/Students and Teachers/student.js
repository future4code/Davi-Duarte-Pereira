"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f4User_1 = require("./f4User");
const JSONFileManager_1 = require("../JSON/JSONFileManager");
class Student extends f4User_1.f4User {
    constructor(name, email, birthday, belongsTo) {
        super(name, email, birthday);
        this.belongsTo = belongsTo;
    }
    createNewUser(name, email, birthday) {
        if (name && email && birthday) {
            try {
                const dbManager = new JSONFileManager_1.JSONFileManager("f4db.json");
                const mutableDatabase = dbManager.getJSONContent();
                const newStudent = {
                    name,
                    email,
                    birthday,
                };
                mutableDatabase.students.push(newStudent);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New student created successfuly.");
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
        else {
            try {
                const dbManager = new JSONFileManager_1.JSONFileManager("f4db.json");
                const mutableDatabase = dbManager.getJSONContent();
                const newTeacher = {
                    name: this.name,
                    email: this.email,
                    birthday: this.birthday,
                    abilities: this.abilities
                };
                mutableDatabase.students.push(newTeacher);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New student created successfuly.");
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map