function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"];
  
    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)];
  
    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)];
  
    let valor;
  
    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero);
    }
  
    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
      texto: numero + naipe,
      valor: valor,
    }
    
    return carta
  
  }
  
  alert("Bem vindo ao jogo de BlackJack!");
  
  let rodada = confirm("Deseja jogar?");
  
  const cartaPc1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
  const cartaUser1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
  const cartaPc2 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
  const cartaUser2 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
  
  if (rodada === true) {
    console.log("Bem vindo ao jogo de BlackJack!");
    let totalUser = cartaUser1.valor + cartaUser2.valor;
    let totalPc = cartaPc1.valor + cartaPc2.valor;
    console.log("Usuário ---- cartas:", cartaUser1.texto, cartaUser2.texto, "pontuação:", totalUser);
    console.log("Computador - cartas:", cartaPc1.texto, cartaPc2.texto, "pontuação:", totalPc);
    if (totalUser !== totalPc) {
      if (totalUser > totalPc) {
        if (totalUser < 22) {
          console.log("O usuário ganhou!");
        } else {
          console.log("O computador ganhou!");
        }
      } else {
        if (totalPc < 22) {
          console.log("O computador ganhou!");
        } else {
          console.log("O usuário ganhou!");
        }
      }
    } else {
      console.log("Empate!")
    }
  } else {
    console.log("O jogo acabou!")
  }