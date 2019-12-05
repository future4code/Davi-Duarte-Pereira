import { ordenarArrayEmOrdemCrescente } from "./ex5";

describe("Ordena array em ordem crescente", () => {
  it("Sort positive numbers", () => {
    const input = [4, 1, 2, 3, 2];

    const result = ordenarArrayEmOrdemCrescente(input);

    expect(result).toEqual([1, 2, 2, 3, 4]);
  });
});
