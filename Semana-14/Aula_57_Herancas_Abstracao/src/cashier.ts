import { Employee } from "./employee";

export class Cashier extends Employee {
    private JOBROLE: string = "Cashier"

    constructor(name: string, salary: number){
        super(name, salary)
    }

    sayJob():void{
        console.log("Hi! I am a ", this.JOBROLE);
    }

    calculateBill(
        dishesToPay: 
        {
            price: number, 
            cost: number, 
            ingredients: string[], 
            timeToCook: number, 
            slicesNumber?: number
        }[] 
    ): number {
        const dishesPrices: number[] = dishesToPay.map((dish) => dish.price);

        const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

        const total: number = dishesPrices.reduce(reducer);

        console.log("Total: ", total);

        return total
    };
};