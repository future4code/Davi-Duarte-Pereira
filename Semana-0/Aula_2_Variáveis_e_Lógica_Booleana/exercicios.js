// Exercício 1
const anoAtual = 2019;
const idade = prompt("Qual é a sua idade? (ao final deste ano)");

const anoDeNascimento = anoAtual - idade;
console.log('Ano de nascimento:', anoDeNascimento);

const diasDeIdade = idade * 365;
console.log('Dias de Idade:', diasDeIdade);

const horasDeIdade = diasDeIdade * 24;
console.log('Horas de Idade:', horasDeIdade + "Horas");

const segundosDeIdade = horasDeIdade * 3600;
console.log('Segundos de Idade', segundosDeIdade + "Segundos");

// Exercicio 2
/* const peso = prompt("Qual é o seu peso em KG?");
const altura = prompt("Qual é a sua altura em centímetros?");
const imc = peso / (altura * altura);

console.log(imc) */