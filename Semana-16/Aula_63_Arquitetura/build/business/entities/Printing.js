"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Printing {
    constructor(measurement, paperType) {
        this.measurement = measurement;
        this.paperType = paperType;
    }
    newPrint(measurement, paperType) {
        measurement ? this.measurement = measurement : null;
        paperType ? this.paperType = paperType : "Brilhante";
        let finalCost;
        switch (measurement) {
            case "13x18":
                finalCost = 20;
                break;
            case "21x30":
                finalCost = 27.80;
                break;
            case "30x30":
                finalCost = 35.40;
                break;
            case "30x42":
                finalCost = 42.30;
                break;
            case "42x60":
                finalCost = 55.60;
                break;
            default:
                break;
        }
        switch (paperType) {
            case "Brilhante":
                finalCost *= 1;
                break;
            case "Fosco":
                finalCost *= 1.05;
                break;
            case "Fibra":
                finalCost *= 1.12;
                break;
            case "Resinado":
                finalCost *= 1.42;
                break;
            case "Perola":
                finalCost *= 1.53;
                break;
            default:
                break;
        }
        return finalCost;
    }
}
exports.Printing = Printing;
//# sourceMappingURL=Printing.js.map