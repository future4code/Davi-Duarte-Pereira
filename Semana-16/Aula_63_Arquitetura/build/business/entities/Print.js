"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Print {
    constructor(measurement, paperType) {
        this.measurement = measurement;
        this.paperType = paperType;
    }
    ;
    calculatePhotoSize() {
        return this.measurement;
    }
    calculatePrice() {
        !this.paperType ? this.paperType = PaperType.Brilhante : null;
        return this.measurement * this.paperType;
    }
    ;
}
exports.Print = Print;
;
var PhotoSize;
(function (PhotoSize) {
    PhotoSize[PhotoSize["13x18"] = 20] = "13x18";
    PhotoSize[PhotoSize["21x30"] = 27.8] = "21x30";
    PhotoSize[PhotoSize["30x30"] = 35.4] = "30x30";
    PhotoSize[PhotoSize["30x42"] = 42.3] = "30x42";
    PhotoSize[PhotoSize["42x60"] = 55.6] = "42x60";
})(PhotoSize = exports.PhotoSize || (exports.PhotoSize = {}));
;
var PaperType;
(function (PaperType) {
    PaperType[PaperType["Brilhante"] = 1] = "Brilhante";
    PaperType[PaperType["Fosco"] = 1.05] = "Fosco";
    PaperType[PaperType["Fibra"] = 1.12] = "Fibra";
    PaperType[PaperType["Resinado"] = 1.42] = "Resinado";
    PaperType[PaperType["Perola"] = 1.53] = "Perola";
})(PaperType = exports.PaperType || (exports.PaperType = {}));
//# sourceMappingURL=Print.js.map