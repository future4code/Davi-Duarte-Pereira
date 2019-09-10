// Coding together

function ex1() {
    const idade = Number(prompt("Qual é a sua idade?"));
  
    if(idade >= 3 && idade <= 4){
    console.log("Mirim");
    } else if(idade >= 5 && idade <= 7){
      console.log("Infantil A");
    } else if(idade >= 8 && idade <= 10){
      console.log("Infantil B");
    } else if(idade >= 11 && idade <= 13){
      console.log("Juvenil A");
    } else if(idade >= 14 && idade <= 17){
      console.log("Juvenil B");
    } else if(idade >= 18 && idade <= 50){
      console.log("Adulto");
    } else if(idade >= 51){
      console.log("Veterano");
    } else {
      console.log("Idade inválida");
    }
  }
  
  
  function ex2() {
    const num = Number(prompt("Digite um numero"));
  
    if (num % 2 === 0) {
      console.log("Seu número é par!");
    } else {
      console.log("Seu número é impar!");
    }
  }
  
  function ex3() {
    const anoInformado = Number(prompt("Digite um ano para validar se ele é bissexto ou não."))
  
    if(anoInformado % 400 === 0){
    console.log('é bissexto')
    } else if(anoInformado % 4 === 0) {
    if(anoInformado % 100 > 0) {
      console.log('é bissexto')
    } else {
      console.log('nao é bissexto')
    }
    } else {
    console.log('nao é bissexto')
    }
  }
  
  