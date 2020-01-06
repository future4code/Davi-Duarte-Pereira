import { Printing } from "./business/entities/Printing";

const test = new Printing();

console.log(test.newPrint("21x30", "Fibra").toFixed(2));

