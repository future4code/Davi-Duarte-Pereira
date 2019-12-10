import { Account } from './createNewAccount';

const userName: string = process.argv[4];
const cpf: number = Number(process.argv[5]);
const age: number = Number(process.argv[6]);


const newAccount = new Account(userName, cpf, age);

newAccount.createAccount(userName, cpf, age);