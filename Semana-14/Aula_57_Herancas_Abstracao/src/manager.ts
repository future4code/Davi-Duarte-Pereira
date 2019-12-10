import { Cashier } from "./cashier";

export class Manager extends Cashier {

    private JOBROLEEE: string = "Manager"

    constructor(name: string, salary: number){
        super(name, salary)
    }

    sayJob():void{
        console.log("Hi! I am a ", this.JOBROLEEE);
    }

    
}