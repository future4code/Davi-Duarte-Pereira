"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f4User_1 = require("./f4User");
const JSONFileManager_1 = require("../JSON/JSONFileManager");
class Teacher extends f4User_1.f4User {
    constructor(name, email, birthday, abilities) {
        super(name, email, birthday, abilities);
    }
    ;
    createNewUser(name, email, birthday, abilities) {
        if (name && email && birthday && abilities) {
            try {
                const dbManager = new JSONFileManager_1.JSONFileManager("f4db.json");
                const mutableDatabase = dbManager.getJSONContent();
                const newTeacher = {
                    name,
                    email,
                    birthday,
                    abilities
                };
                mutableDatabase.teachers.push(newTeacher);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New teacher created successfuly.");
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
                mutableDatabase.teachers.push(newTeacher);
                dbManager.saveToJSON(mutableDatabase);
                console.log("New teacher created successfuly.");
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map