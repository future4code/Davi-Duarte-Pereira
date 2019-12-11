import { Client } from './client';
import { Trade } from './trade';

export class ComercialClient extends Trade implements Client{

  clientName: string;
  clientNumber: number;
  consumedEnergy: number;

  constructor(name: string, cnpj: number, cep: string, consumedEnergy: number) {
    super(name, cnpj, cep);
    this.clientName = name;
    this.clientNumber = cnpj;
    this.consumedEnergy = consumedEnergy;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
    
}

const future4 = new ComercialClient("Future4", 1234567891234, "18023-052", 1000);
console.log(future4.calculateBill());



const lambdaSchool = new ComercialClient("Lambda School", 987654321987, "18023-052", 3500);
console.log(lambdaSchool.calculateBill());
