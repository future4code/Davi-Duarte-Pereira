"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
        this.JOBROLE = "Cashier";
    }
    sayJob() {
        console.log("Hi! I am a ", this.JOBROLE);
    }
    calculateBill(dishesToPay) {
        const dishesPrices = dishesToPay.map((dish) => dish.price);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const total = dishesPrices.reduce(reducer);
        console.log("Total: ", total);
        return total;
    }
    ;
}
exports.Cashier = Cashier;
;
//# sourceMappingURL=cashier.js.map