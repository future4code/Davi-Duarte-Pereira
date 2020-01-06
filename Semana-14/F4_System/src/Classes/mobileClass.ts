import { Class } from './class';
import { JSONFileManager } from '../JSON/JSONFileManager';
import { Teacher } from '../Students and Teachers/teacher';
import { Student } from '../Students and Teachers/student';


export class MobileClass implements Class {
 
    static counter: number = 0;
    
    constructor(
        public startDate: string,
        public endDate: string,
        public teachers: Teacher[],
        public students: Student[]
    ) {
        ++MobileClass.counter        
    }


    generateNewCourse(
        startDate?: string,
        endDate?: string,
        teachers?: Teacher[],
        students?: Student[]
    ): void {
        if (startDate && endDate && teachers && students) {
            try {
                const dbManager = new JSONFileManager("f4db.json");

                const mutableDatabase = dbManager.getJSONContent();

                const newClass = {
                    id: MobileClass.counter,
                    startsAt: startDate,
                    endsAt: endDate,
                    teachers: teachers,
                    students: students
                }

                mutableDatabase.classes.Mobile.push(newClass);

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
                    id: MobileClass.counter,
                    startsAt: this.startDate,
                    endsAt: this.endDate,
                    teachers: this.teachers,
                    students: this.students
                }

                mutableDatabase.classes.Mobile.push(newClass);

                dbManager.saveToJSON(mutableDatabase);

                console.log("New class created successfuly.");
            } catch(error) {
                console.error(error);
            }
        }
    }
} 