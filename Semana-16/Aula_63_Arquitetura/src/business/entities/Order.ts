import { Print, PhotoSize, PaperType } from "./Print";
import { Frame, FrameType, FrameColor, BorderSize } from "./Frame";

export class Order {
    constructor(
        private print: Print,
        private frame: Frame
    ){}

    public calculateNewPrint(): number {
        return this.print.calculatePrice();
    };

    public calculateNewFrame(): number {
        return this.frame.calculatePrice(this.print.calculatePhotoSize());
    };

    public calculateOrder(): number {
        return this.calculateNewPrint() + this.calculateNewFrame();
    }
}