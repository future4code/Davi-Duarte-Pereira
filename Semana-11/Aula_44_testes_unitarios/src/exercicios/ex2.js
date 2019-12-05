export function checaPalindromo(string) {
  if (typeof string === "string") {
    const regex = /[\W_]/g;

    const lowStringWithRegex = string.toLowerCase().replace(regex, "");

    const reverseString = lowStringWithRegex
      .split("")
      .reverse()
      .join("");

    if (reverseString === lowStringWithRegex) return true;
    else return false;
  } else return null;
}
