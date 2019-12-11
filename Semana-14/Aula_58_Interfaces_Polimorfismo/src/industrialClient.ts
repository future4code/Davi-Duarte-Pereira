import { Industry } from './industry';
import { Client } from './client';

export class IndustrialClient extends Industry implements Client{

  clientName: string;
  clientNumber: number;
  consumedEnergy: number;

  constructor(industryName: string, industryNumber: number, cep: string, consumedEnergy: number) {
    super(industryName, industryNumber, cep);
    this.clientName = industryName;
    this.clientNumber = industryNumber;
    this.consumedEnergy = consumedEnergy;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.45 + 10000
  }

}

const futurex = new IndustrialClient("Future X", 23109412409, "30486-130", 5000);
console.log(futurex.calculateBill());


const futureMotors = new IndustrialClient("Future Motors", 32409823094, "39521-596", 100000);
console.log(futureMotors.calculateBill());
