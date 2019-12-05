export function removeItensDuplicados(array) {
  const newArray = [...new Set(array)];
  return newArray;
}
