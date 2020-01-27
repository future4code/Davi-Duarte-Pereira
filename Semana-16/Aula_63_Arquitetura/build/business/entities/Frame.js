"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Frame {
    constructor(color, type, size) {
        this.color = color;
        this.type = type;
        this.size = size;
    }
    calculateBorderSize(photoSize) {
        return photoSize * this.size;
    }
    calculatePrice(photoSize) {
        return this.type + this.calculateBorderSize(photoSize);
    }
}
exports.Frame = Frame;
var FrameType;
(function (FrameType) {
    FrameType[FrameType["Crua"] = 15] = "Crua";
    FrameType[FrameType["Lisa"] = 32] = "Lisa";
    FrameType[FrameType["Classica"] = 43] = "Classica";
    FrameType[FrameType["Vintage"] = 52.5] = "Vintage";
    FrameType[FrameType["Madeira"] = 60] = "Madeira";
})(FrameType = exports.FrameType || (exports.FrameType = {}));
;
var BorderSize;
(function (BorderSize) {
    BorderSize[BorderSize["Pequena"] = 0.25] = "Pequena";
    BorderSize[BorderSize["Media"] = 0.5] = "Media";
    BorderSize[BorderSize["Grande"] = 0.75] = "Grande";
})(BorderSize = exports.BorderSize || (exports.BorderSize = {}));
;
var FrameColor;
(function (FrameColor) {
    FrameColor["amarela"] = "AMARELA";
    FrameColor["vermelha"] = "VERMELHA";
    FrameColor["azul"] = "AZUL";
    FrameColor["laranja"] = "LARANJA";
    FrameColor["verde"] = "VERDE";
    FrameColor["roxa"] = "ROXA";
})(FrameColor = exports.FrameColor || (exports.FrameColor = {}));
//# sourceMappingURL=Frame.js.map