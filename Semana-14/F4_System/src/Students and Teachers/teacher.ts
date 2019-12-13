import { f4User } from "./f4User";
import { JSONFileManager } from "../JSON/JSONFileManager";


export class Teacher extends f4User {

    constructor(
        name: string,
        email: string,
        birthday: string,
        abilities?: string[],
    ){
        super(name, email, birthday, abilities);
    };


    createNewUser(
        name?: string,
        email?: string,
        birthday?: string,
        abilities?: string[],
    ): void {
        if (name && email && birthday && abilities) {
            try {
                const dbManager = new JSONFileManager("f4db.json");

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

                mutableDatabase.teachers.push(newTeacher);

                dbManager.saveToJSON(mutableDatabase);

                console.log("New teacher created successfuly.");
            } catch(error) {
                console.error(error);
            };
        }
    }
}