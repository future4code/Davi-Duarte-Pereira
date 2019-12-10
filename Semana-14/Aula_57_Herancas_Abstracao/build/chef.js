"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const menu_1 = require("./menu");
class Chef extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
        this.JOBROLE = "Chef";
    }
    ;
    sayJob() {
        console.log("Hi! I am a ", this.JOBROLE);
    }
    removeDishFromMenu(dishToRemove) {
        const teste = menu_1.menuOfDesserts.filter((item) => item.name !== dishToRemove);
        console.log();
        console.log("filtered", teste);
    }
    addNewDish(name, price, cost, ingredients, timeToCook, slicesNumber) {
        if (slicesNumber) {
            const newDish = new dessert_1.Dessert(name, price, cost, ingredients, timeToCook, slicesNumber);
            menu_1.menuOfDesserts.push(newDish);
            console.log("A new dessert was added to the menu with the name of ", name, "!");
            console.log();
            console.log("New menu of desserts: ", menu_1.menuOfDesserts);
        }
        else {
            const newDish = new saltydish_1.SaltyDish(name, price, cost, ingredients, timeToCook);
            menu_1.menuOfSaltyDishes.push(newDish);
            console.log("A new salty dish was added to the menu with the name of ", name, "!");
            console.log();
            console.log("New menu of salty dishes: ", menu_1.menuOfSaltyDishes);
        }
    }
}
exports.Chef = Chef;
;
//# sourceMappingURL=chef.js.map