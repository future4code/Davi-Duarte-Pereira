"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(print, frame) {
        this.print = print;
        this.frame = frame;
    }
    calculateNewPrint() {
        return this.print.calculatePrice();
    }
    ;
    calculateNewFrame() {
        return this.frame.calculatePrice(this.print.calculatePhotoSize());
    }
    ;
    calculateOrder() {
        return this.calculateNewPrint() + this.calculateNewFrame();
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map