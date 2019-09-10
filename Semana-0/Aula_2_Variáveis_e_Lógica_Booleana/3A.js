const casaDestrancada = Boolean(confirm('A casa está destrancada? Clique em cancelar caso não esteja.'));
const chaveDaCasa = Boolean(confirm('Você possuí a chave da casa? Clique em cancelar caso não tenha.'));
const canHeEnter = (casaDestrancada || chaveDaCasa);

console.log("O usuário vai conseguir entrar? " + canHeEnter);