const fahrenheit = Number(prompt('Digite a temperatura em fahrenheit.'));
const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
const celsius = (fahrenheit - 32) * 5/9;

console.log('Valor em kelvin: ' + kelvin);
console.log('Valor em celsius: ' + celsius);