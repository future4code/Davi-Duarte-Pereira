import * as moment from "moment"
import * as fs from "fs"



const inputName = String(process.argv[4])
const inputDescription = String(process.argv[5])
const inputDate = new Date(process.argv[6])

const filename = "./events.json"

type event = {
    name: string,
    description: string,
    date: Date
}

const json = fs.readFileSync(filename)

const getEvents = (name: string, description: string, date: Date): void => {
    

    const newEvent: event = {
        name,
        description,
        date,
    }

    console.log(newEvent)
}



getEvents(inputName, inputDescription, inputDate);

console.log(json);