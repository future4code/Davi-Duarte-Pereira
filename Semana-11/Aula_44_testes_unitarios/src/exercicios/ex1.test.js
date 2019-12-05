import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  it("Returns true if the year is multiple of 400", () => {

    const ano = 1600

    const result = anoBissexto(ano);

    expect(result).toBe(true);
  });

  it("Returns false if the year is not multiple of 400", () => {

    const ano = 1000

    const result = anoBissexto(ano);

    expect(result).toBe(false);
  });

  it("Returns true if the year is multiple of 4, but multiple of 400 and 100 also", () => {

    // - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100
    // mas não de 400, p.ex: **1996, 2000, 2004, 2008, 2012, 2016…**

    const ano = 2000

    const result = anoBissexto(ano);

    expect(result).toBe(true);
  });

  it("Returns false if the year is multiple of 4, but multiple of 100 and not multiple of 400", () => {

    // - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100
    // mas não de 400, p.ex: **1996, 2000, 2004, 2008, 2012, 2016…**

    const ano = 1999

    const result = anoBissexto(ano);

    expect(result).toBe(false);
  });
});
