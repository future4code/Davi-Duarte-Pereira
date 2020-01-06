export class Printing {

    constructor(
        public measurement?: string,
        public paperType?: string
    ){}

    newPrint(measurement?: string, paperType?: string): number {
        measurement ? this.measurement = measurement : measurement = this.measurement;
        paperType ? this.paperType = paperType : "Brilhante";
        let finalCost: number;

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
                console.log("Sorry, but you did not provide the measurement specification. Aborting operations.");
                return 0;
        };

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
    };
};