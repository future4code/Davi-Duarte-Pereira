function exercicio1(){
    let numeroPensado = Number(prompt("Player 1: Insira um número de 1 a 20!"));
    let chute = Number(prompt("Player 2: Chute um número de 1 a 20!"));
    let errou = Boolean(chute !== numeroPensado);
    let qtdTentativas = chute++
  
    console.log("Vamos Jogar!");
  
    while (errou === true){
      if (chute > numeroPensado){
        console.log("O número chutado foi: ", chute);
        console.log("Abaixo");
        alert("Errou! Tente mais abaixo.");
        chute = Number(prompt("Tente novamente:"));
      } else if (chute < numeroPensado) {
          console.log("O número chutado foi: ", chute);
          console.log("Acima");
          alert("Errou! Tente mais acima.");
          chute = Number(prompt("Tente novamente:"));
        } else if (chute === numeroPensado){
            errou = false
            console.log("Acertou!! Número de tentativas: ", qtdTentativas);
          }
    }
  }
  
  
  function exercicio2(){
    let numeroPensado = Math.floor((Math.random() * 100) + 1);
    let chute = Number(prompt("Player 2: Chute um número de 1 a 100!"));
    let errou = Boolean(chute !== numeroPensado);
    let qtdTentativas = chute++
  
    console.log("Vamos Jogar!");
  
    while (errou === true){
      if (chute > numeroPensado){
        console.log("O número chutado foi: ", chute);
        console.log("Abaixo");
        alert("Errou! Tente mais abaixo.");
        chute = Number(prompt("Tente novamente:"));
      } else if (chute < numeroPensado) {
          console.log("O número chutado foi: ", chute);
          console.log("Acima");
          alert("Errou! Tente mais acima.");
          chute = Number(prompt("Tente novamente:"));
        } else if (chute === numeroPensado){
            errou = false
            console.log("Acertou!! Número de tentativas: ", qtdTentativas);
          }
    }
  }
  
  
  function exercicio3(){
    let numeroPensado = Math.floor((Math.random() * 100) + 1);
    let chute = Math.floor((Math.random() * 100) + 1);
    let errou = Boolean(chute !== numeroPensado);
    let qtdTentativas = chute++
  
    console.log("Vamos Jogar!");
  
    while (errou === true){
      if (chute > numeroPensado){
        console.log("O número chutado foi: ", chute);
        console.log("Abaixo");
        chute = Math.floor((Math.random() * 100) + 1);
      } else if (chute < numeroPensado) {
          console.log("O número chutado foi: ", chute);
          console.log("Acima");
          chute = Math.floor((Math.random() * 100) + 1);
        } else if (chute === numeroPensado){
            errou = false
            console.log("Acertou!! Número de tentativas: ", qtdTentativas)
          }
    }
  }
  
  exercicio3();