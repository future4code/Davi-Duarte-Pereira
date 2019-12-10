"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
class Manager extends cashier_1.Cashier {
    constructor(name, salary) {
        super(name, salary);
        this.JOBROLEEE = "Manager";
    }
    sayJob() {
        console.log("Hi! I am a ", this.JOBROLEEE);
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map