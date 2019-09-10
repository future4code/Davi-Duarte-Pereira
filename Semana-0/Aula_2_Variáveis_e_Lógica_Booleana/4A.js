const quilowatt = Number(prompt("Quantos quilowatts a residência consumiu?"));
const salarioMin = Number(prompt("Qual é o seu salário mininmo?"));
const valorWatt = salarioMin * 0.2;
const valor_a_pagar = valorWatt * quilowatt;
const descontoPag = valor_a_pagar - (valor_a_pagar * 15 / 100);

console.log("Esse é o valor do quilowatt: R$" + valorWatt);
console.log("Esse é o valor a ser pago: R$" + valor_a_pagar);
console.log("Este é o valor com desconto: R$" + descontoPag);