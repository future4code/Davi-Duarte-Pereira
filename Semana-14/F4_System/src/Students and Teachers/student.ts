import { f4User } from "./f4User";
import { JSONFileManager } from "../JSON/JSONFileManager";


export class Student extends f4User {

    constructor(
        name: string,
        email: string,
        birthday: string,
        public belongsTo?: string | number
    ){
        super(name,email,birthday);
    }

    createNewUser(
        name?: string,
        email?: string,
        birthday?: string,
    ): void {
        if (name && email && birthday) {
            try {
                const dbManager = new JSONFileManager("f4db.json");

                const mutableDatabase = dbManager.getJSONContent();

                const newStudent = {
                    name,
                    email,
                    birthday,
                };

                mutableDatabase.students.push(newStudent);

                dbManager.saveToJSON(mutableDatabase);

                console.log("New student created successfuly.");
            } catch(error) {
                console.error(error);
            };
        } else {
            try {
                const dbManager = new JSONFileManager("f4db.json");

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
            } catch(error) {
                console.error(error);
            };
        }
    }
}