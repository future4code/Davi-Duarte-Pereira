import { JSONFileManager } from './JSONFileManager';

export class Account {
    private name: string;
    private cpf: number;
    private age: number;
    private balance: number = 0;

    constructor(name: string, cpf: number, age: number){
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
    }

    public createAccount(name: string, cpf: number, age: number){
        if (age >= 18){
            this.name = name;
            this.cpf = cpf;
            this.age = age;

            const newUser = {
                name: this.name,
                cpf: this.cpf,
                age: this.age,
                balance: this.balance,
            }

            const JSONFileMan: any = new JSONFileManager("users.json");

            JSONFileMan.saveToJSON(newUser);

            console.log("new user created susccesfully.");

        } else {
            console.log("you cannot create a bank account under the age of 18.");
        }
    }

}