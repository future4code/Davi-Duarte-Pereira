import { Residence } from './residence';
import { Client } from './client';

export class ResidentialClient extends Residence implements Client {

  clientName: string;
  clientNumber: number;
  consumedEnergy: number;

  constructor(name: string, cpf: number, cep: string, consumedEnergy: number) {
    super(name, cpf, cep);
    this.clientName = name;
    this.clientNumber = cpf;
    this.consumedEnergy = consumedEnergy;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
    
}

const davi = new ResidentialClient("Davi Duarte Pereira", 49614863912, "18057-599", 500);
console.log(davi.calculateBill());


const sarah = new ResidentialClient("Sarah Migliorin Rocha", 34912475820, "18057-291", 340);
console.log(sarah.calculateBill());
