function ex1a() {
    const num1 = Number(prompt("Digite o primeiro número."));
    const num2 = Number(prompt("Digite o segundo número."));
  
    if (num1 === num2){
      console.log("Os números digitados acima são idênticos. tente novamente.");
    } else if (num1 > num2){
      console.log("Esses são os números digitados em ordem decrescente: " + num1 + ", " + num2);
    } else if (num2 > num1){
      console.log("Esses são os números digitados em ordem decrescente: " + num2 + ", " + num1);
    }
  }
  
  
  function ex1b() {
    const num1 = Number(prompt("Digite o primeiro número."));
    const num2 = Number(prompt("Digite o segundo número."));
    const num3 = Number(prompt("Digite o terceiro número."));
  
    if (num1 === num2 && num3){
      console.log("Os números digitados acima são idênticos. tente novamente.");
    } else if (num1 > num2 && num3){
        if (num2 > num3) {
          console.log("Números em ordem decrescente: " + num1 + ", " + num2 + ", " + num3);
          } else if (num3 > num2) {
              console.log("Números em ordem decrescente: " + num1 + ", " + num3 + ", " + num2);
        }
    } else if (num2 > num1 && num3){
        if (num1 > num3) {
          console.log("Números em ordem decrescente: " + num2 + ", " + num1 + ", " + num3);
          } else if (num3 > num1) {
              console.log("Números em ordem decrescente: " + num2 + ", " + num3 + ", " + num1);
        }
    } else if (num3 > num1 && num2){
        if (num1 > num2) {
          console.log("Números em ordem decrescente: " + num3 + ", " + num1 + ", " + num2);
          } else if (num2 > num1) {
              console.log("Números em ordem decrescente: " + num3 + ", " + num2 + ", " + num1);
        }
    }
  }
  
  
  function ex2a() {
    const animal = Boolean(confirm("É um animal?"));
    
  
    if (animal === true){
      const temPelo = Boolean(confirm("Tem pelo?"));
      if (temPelo === true){
        const late = Boolean(confirm("Ele(a) late?"));
        if (late === true){
          console.log("É um cachorro.");
        } else {
          console.log("É um gato.");
        }
      } else {
          const voa = Boolean(confirm("Ele(a) voa?"));
          if (voa === true){
            console.log("É um pássaro.");
          } else {
            console.log("É um peixe.");
          }
      }
    } else {
      console.log("É uma pedra.");
    } 
  }
  
  
  function ex2b() {
    const animal = Boolean(confirm("É um animal?"));
    
  
    if (animal === true){
      const temPelo = Boolean(confirm("Tem pelo?"));
      if (temPelo === true){
        const late = Boolean(confirm("Ele(a) late?"));
        if (late === true){
          console.log("É um cachorro.");
        } else {
          const queijo = Boolean(confirm("Ele(a) gosta de queijo?"));
          if (queijo === true){
            console.log("É um rato.");
          } else {
            console.log("É um gato.");
          }
        }
      } else {
          const voa = Boolean(confirm("Ele(a) voa?"));
          if (voa === true){
            console.log("É um pássaro.");
          } else {
            const hebert = Boolean(confirm("Faz um som tipo 'Hebert'?"));
            if (hebert === true){
              console.log("É um sapo.");
            } else {
              console.log("É um peixe.");
            }
          }
      }
    } else {
      const verde = Boolean(confirm("É verde?"));
      if (verde === true){
        console.log("É uma planta.")
      } else {
        console.log("É uma pedra.");
      }
    } 
  }
  
  function ex3() {
    const nome = prompt("Insira seu nome completo:");
    const tipoJogo = prompt("Qual tipo de jogo será assistido?");
    const etapa = prompt("Qual etapa você pretende assistir?");
    const categoria = prompt("Insira a categoria do jogo:");
    const ingressos = Number(prompt("Quantos ingressos?"));
    let valorUNBR;
    let valorTotalBR;
    let valorUNUS;
    let valorTotalUS;
    
    console.log("---Dados da compra---");
    console.log(nome);
  
    switch(tipoJogo) {
      case "IN":
        console.log("Tipo do jogo: Internacional");
        break;
      case "NA":
        console.log("Tipo do jogo: Nacional");
        break;
    }
    switch(etapa) {
      case "SF":
        console.log("Etapa do jogo: Semi-final");
        break;
      case "DT":
        console.log("Etapa do jogo: Decisão do terceiro lugar");
        break;
      case "FI":
        console.log("Etapa do jogo: Final");
        break;
    }
    switch(categoria) {
      case "1":
        console.log("Categoria: 1");
        break;
      case "2":
        console.log("Categoria: 2");
        break;
      case "3":
        console.log("Categoria: 3");
        break;
      case "4":
        console.log("Categoria: 4");
        break;
    }
  
    console.log("Quantidade de ingressos:", ingressos);
    console.log("---Valores---");
  
    if (etapa === "SF" && categoria === "1" && tipoJogo === "NA"){
      let valorUNBR = 1320
      let valorTotalBR = 1320 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "2" && tipoJogo === "NA"){
      let valorUNBR = 880
      let valorTotalBR = 880 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "3" && tipoJogo === "NA"){
      let valorUNBR = 550
      let valorTotalBR = 550 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "4" && tipoJogo === "NA"){
      let valorUNBR = 220
      let valorTotalBR = 220 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "1" && tipoJogo === "IN"){
      let valorUNBR = 1320
      let valorTotalBR = 1320 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "2" && tipoJogo === "IN"){
      let valorUNBR = 880
      let valorTotalBR = 880 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "3" && tipoJogo === "IN"){
      let valorUNBR = 550
      let valorTotalBR = 550 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "SF" && categoria === "4" && tipoJogo === "IN"){
      let valorUNBR = 220
      let valorTotalBR = 220 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    }
  
  
    if (etapa === "DT" && categoria === "1" && tipoJogo === "NA"){
      let valorUNBR = 660
      let valorTotalBR = 660 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "2" && tipoJogo === "NA"){
      let valorUNBR = 440
      let valorTotalBR = 440 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "3" && tipoJogo === "NA"){
      let valorUNBR = 330
      let valorTotalBR = 330 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "4" && tipoJogo === "NA"){
      let valorUNBR = 170
      let valorTotalBR = 170 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "1" && tipoJogo === "IN"){
      let valorUNBR = 660
      let valorTotalBR = 660 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "2" && tipoJogo === "IN"){
      let valorUNBR = 440
      let valorTotalBR = 440 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "3" && tipoJogo === "IN"){
      let valorUNBR = 330
      let valorTotalBR = 330 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "DT" && categoria === "4" && tipoJogo === "IN"){
      let valorUNBR = 170
      let valorTotalBR = 170 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    }
  
  
    if (etapa === "FI" && categoria === "1" && tipoJogo === "NA"){
      let valorUNBR = 1980 
      let valorTotalBR = 1980 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "2" && tipoJogo === "NA"){
      let valorUNBR = 1320
      let valorTotalBR = 1320 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "3" && tipoJogo === "NA"){
      let valorUNBR = 880
      let valorTotalBR = 880 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "4" && tipoJogo === "NA"){
      let valorUNBR = 330
      let valorTotalBR = 330 * ingressos
      console.log("Valor do ingresso: R$", valorUNBR );
      console.log("Valor total da compra: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "1" && tipoJogo === "IN"){
      let valorUNBR = 1980
      let valorTotalBR = 1980 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "2" && tipoJogo === "IN"){
      let valorUNBR = 1320
      let valorTotalBR = 1320 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "3" && tipoJogo === "IN"){
      let valorUNBR = 880
      let valorTotalBR = 880 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    } else if (etapa === "FI" && categoria === "4" && tipoJogo === "IN"){
      let valorUNBR = 330
      let valorTotalBR = 330 * ingressos
      let valorUNUS = valorUNBR * 4.10
      let valorTotalUS = valorUNUS * ingressos
      console.log("Valor do ingresso em US$: US$", valorUNUS );
      console.log("Valor do ingresso em R$: R$", valorUNBR );
      console.log("Valor total da compra em US$: US$", valorTotalUS);
      console.log("Valor total da compra em R$: R$", valorTotalBR);
    }
  }
  
  ex3()