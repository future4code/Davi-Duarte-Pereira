"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
class Account {
    constructor(name, cpf, age) {
        this.balance = 0;
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
    }
    createAccount(name, cpf, age) {
        if (age >= 18) {
            this.name = name;
            this.cpf = cpf;
            this.age = age;
            const newUser = {
                name: this.name,
                cpf: this.cpf,
                age: this.age,
                balance: this.balance,
            };
            const JSONFileMan = new JSONFileManager_1.JSONFileManager("users.json");
            JSONFileMan.saveToJSON(newUser);
            console.log("new user created susccesfully.");
        }
        else {
            console.log("you cannot create a bank account under the age of 18.");
        }
    }
}
exports.Account = Account;
//# sourceMappingURL=createNewAccount.js.map