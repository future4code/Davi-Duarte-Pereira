import { Place } from "./place";

export class Trade extends Place {
  constructor(public name: string, public cnpj: number, cep: string) {
    super(cep);
  }
}
