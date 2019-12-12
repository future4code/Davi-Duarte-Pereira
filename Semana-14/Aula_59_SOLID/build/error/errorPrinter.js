"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorPrinter {
    constructor(errorMessage, date) {
        this.errorMessage = errorMessage;
        this.date = date;
    }
    onError() {
        console.log(`${this.errorMessage} - ${this.date}`);
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=errorPrinter.js.map