function criarItem() {
    let valorDoInput = document.querySelector("input").value;

    let diaDaSemana = document.querySelector("select").value;

    let listaSelecionada;

    let novoItem = document.createElement("li");

    novoItem.innerHTML = valorDoInput;

    if (valorDoInput === "") {
        // Desafio 1: Se o input estiver em branco, alertar o usuário.
        alert("O valor não pode ser nulo.")
    } else {
        if (diaDaSemana === "segunda") {
            let listaSelecionada = document.getElementById("Seg");
    
            listaSelecionada.append(novoItem);
        } else if (diaDaSemana === "terca") {
            let listaSelecionada = document.getElementById("Ter");
    
            listaSelecionada.append(novoItem);
        } else if (diaDaSemana === "quarta") {
            let listaSelecionada = document.getElementById("Qua");
    
            listaSelecionada.append(novoItem);
        } else if (diaDaSemana === "quinta") {
            let listaSelecionada = document.getElementById("Qui");
    
            listaSelecionada.append(novoItem);
        } else if (diaDaSemana === "sexta") {
            let listaSelecionada = document.getElementById("Sex");
    
            listaSelecionada.append(novoItem);
        } else if (diaDaSemana === "sabado") {
            let listaSelecionada = document.getElementById("Sab");
    
            listaSelecionada.append(novoItem);
        } else {
            let listaSelecionada = document.getElementById("Dom");
    
            listaSelecionada.append(novoItem);
        }
    }

    // Apaga o input do usuário após a inserção do mesmo na tabela.
    document.querySelector("input").value = "";
}