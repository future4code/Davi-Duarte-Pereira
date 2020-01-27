import { PhotoSize } from "./Print";

export class Frame {
    constructor(
        private color: FrameColor,
        private type: FrameType,
        private size: BorderSize
    ){}

    private calculateBorderSize(photoSize: PhotoSize): number{
        return photoSize * this.size;
    }

    public calculatePrice(photoSize: PhotoSize): number {
        return this.type + this.calculateBorderSize(photoSize);
    }
}

export enum FrameType {
    "Crua" = 15,
    "Lisa" = 32,
    "Classica" = 43,
    "Vintage" = 52.50,
    "Madeira" = 60
};

export enum BorderSize {
    "Pequena" = 0.25,
    "Media" = 0.5,
    "Grande" = 0.75
}; 

export enum FrameColor {
    "amarela" =  "AMARELA",
    "vermelha" = "VERMELHA",
    "azul" = "AZUL",
    "laranja" = "LARANJA",
    "verde" = "VERDE",
    "roxa" = "ROXA"
}