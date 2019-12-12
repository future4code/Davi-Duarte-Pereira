import { Employee } from "./employee";
import { Dessert } from "./dessert";
import { SaltyDish } from "./saltydish";
import { menuOfDesserts, menuOfSaltyDishes } from "./menu";


export class Chef extends Employee {
    private JOBROLE: string = "Chef";

    constructor(name: string, salary: number){
        super(name, salary);
    };

    sayJob(): void{
        console.log("Hi! I am a ", this.JOBROLE);
    }

    removeDishFromMenu(dishToRemove: string): void{
        const menuWithRemovedDish = menuOfDesserts.filter((item) => item.name !== dishToRemove);
        console.log();
        console.log("filtered", menuWithRemovedDish);
    }

    public addNewDish(
        name: string,
        price: number,
        cost: number, 
        ingredients: string[], 
        timeToCook: number, 
        slicesNumber?: number
    ): void {
        if (slicesNumber) {
            const newDish = new Dessert(name, price, cost, ingredients, timeToCook, slicesNumber);

            menuOfDesserts.push(newDish)

            console.log("A new dessert was added to the menu with the name of ", name, "!");
            console.log();
            console.log("New menu of desserts: ", menuOfDesserts);
        } else {
            const newDish = new SaltyDish(name, price, cost, ingredients, timeToCook);

            menuOfSaltyDishes.push(newDish);

            console.log("A new salty dish was added to the menu with the name of ", name, "!");
            console.log();
            console.log("New menu of salty dishes: ", menuOfSaltyDishes);
        }
    }

};