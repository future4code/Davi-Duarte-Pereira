export class Print {

    constructor(
        private measurement: PhotoSize,
        private paperType?: PaperType 
    ){};

    public calculatePhotoSize(): number {
        return this.measurement;
    }

    public calculatePrice(): number {        
        !this.paperType ? this.paperType = PaperType.Brilhante : null;
        return this.measurement * this.paperType;
    };
};


export enum PhotoSize {
    "13x18" = 20,
    "21x30" = 27.80,
    "30x30" = 35.40,
    "30x42" = 42.30,
    "42x60" = 55.60
};

export enum PaperType {
    "Brilhante" = 1,
    "Fosco" = 1.05,
    "Fibra" = 1.12,
    "Resinado" = 1.42,
    "Perola" = 1.53
}