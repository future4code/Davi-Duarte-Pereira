import { Place } from "./place";

export class Industry extends Place{

  constructor(public industryName: string, public industryNumber: number, cep: string) {
    super(cep);
  }

}
