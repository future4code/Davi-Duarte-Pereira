import { Student } from './../Students and Teachers/student';
import { Class } from './class';
import { JSONFileManager } from '../JSON/JSONFileManager';
import { Teacher } from '../Students and Teachers/teacher';


export class WebClass implements Class {
    constructor(
        public startDate: string,
        public endDate: string,
        public teachers: Teacher[],
        public students: Student[],
        public id: string
    ) {}


    generateNewCourse(
        startDate?: string,
        endDate?: string,
        teachers?: Teacher[],
        students?: Student[],
        id?: string
    ): void {
        if (startDate && endDate && id && teachers && students) {
            try {
                const dbManager = new JSONFileManager("f4db.json");

                const mutableDatabase = dbManager.getJSONContent();

                const newClass = {
                    id: id,
                    startsAt: startDate,
                    endsAt: endDate,
                    teachers: [teachers],
                    students: [students]
                }

                mutableDatabase.classes.WebFullStack.push(newClass);

                dbManager.saveToJSON(mutableDatabase);

                console.log("New class created successfuly.");

            } catch(error) {
                console.error(error);
            }
        } else {
            try {
                const dbManager = new JSONFileManager("f4db.json");

                const mutableDatabase = dbManager.getJSONContent();

                const newClass = {
                    id: this.id,
                    startsAt: this.startDate,
                    endsAt: this.endDate,
                    teachers: [this.teachers],
                    students: [this.students]
                }

                mutableDatabase.classes.WebFullStack.push(newClass);

                dbManager.saveToJSON(mutableDatabase);

                console.log("New class created successfuly.");
            } catch(error) {
                console.error(error);
            }
        }
    }
} 