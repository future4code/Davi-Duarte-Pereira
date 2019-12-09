"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createNewAccount_1 = require("./createNewAccount");
const userName = process.argv[4];
const cpf = Number(process.argv[5]);
const age = Number(process.argv[6]);
const newAccount = new createNewAccount_1.Account(userName, cpf, age);
newAccount.createAccount(userName, cpf, age);
//# sourceMappingURL=index.js.map