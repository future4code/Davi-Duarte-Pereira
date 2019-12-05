export function primeirasLetrasParaMaiusculas(frase) {
  return frase
    .split(" ")
    .map(string => string.charAt(0).toUpperCase() + string.substring(1))
    .join(" ");
}
