import { primeirasLetrasParaMaiusculas } from "./ex6";

describe("Ordena array em ordem crescente", () => {
  it("Returns the string with upper case in the first letter of each word", () => {
    const input = "Oi! Sou uma string bem legal para testes!";
    const result = primeirasLetrasParaMaiusculas(input);

    expect(result).toBe("Oi! Sou Uma String Bem Legal Para Testes!");
  });
});
