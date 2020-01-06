export class Framing {
    constructor(
        public color?: string,
        public type?: string,
        public measurement?: string
    ){}

    newFrame(color?: string, type?: string, measurement?: string): number {
        color ? color : this.color = color; 
        type ? type : this.type = type; 
        measurement ? measurement : this.measurement = measurement;

        let finalPrice: number;
        
        switch (type) {
            case "Crua":
                finalPrice = 15;
                break;
            case "Lisa":
                finalPrice = 32;
                break;
            case "Classica":
                finalPrice = 43;
                break;
            case "Vintage":
                finalPrice = 52.50;
                break;
            case "Madeira":
                finalPrice = 60;
                break;
            default:
                console.log("Type not found. Please, try again.");
                return 0;
        }

        return finalPrice;
    }
}