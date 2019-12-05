import { removeItensDuplicados } from "./ex4";

describe("Remove itens duplicados", () => {
  it("Remove duplicated integer numbers", () => {
    const input = [1, 2, 3, 2, 4];

    const result = removeItensDuplicados(input);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
