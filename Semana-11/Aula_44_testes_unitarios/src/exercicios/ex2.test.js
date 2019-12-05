import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("Returns true if the reverse string is equal to the normal string.", () => {
    const input = "Socorram-me subi no onibus em marrocos";

    const result = checaPalindromo(input);

    expect(result).toBe(true);
  });

  it("Returns false if the reverse string is not equal to the normal string.", () => {
    const input = "Test";

    const result = checaPalindromo(input);

    expect(result).toBe(false);
  });

  it("Returns false if the input is not a string.", () => {
    const input = 85;

    const result = checaPalindromo(input);

    expect(result).toBe(null);
  });
});
