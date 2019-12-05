import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  it("Expects to receive a number between 2 and 5", () => {
    const input1 = 2;
    const input2 = 5;

    const result = sorteiaNumero(input1, input2);

    expect(result).toBeLessThanOrEqual(5);
    expect(result).toBeGreaterThanOrEqual(2);
  });
});
