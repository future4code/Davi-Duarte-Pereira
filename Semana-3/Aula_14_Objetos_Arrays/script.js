function buscaItem(chave) {
    const valor = window.localStorage.getItem(chave);
    if (valor) {
        return JSON.parse(valor);
    }
    return [];
}

function salvaItem(chave, item) {
    if (item && chave) {
        window.localStorage.setItem(chave, JSON.stringify(item));
    }
}

// function apagaItems() {
//     document.getElementById("in-name").value = "";
//     document.getElementById("in-idade").value = "";
//     document.getElementById("in-email").value = "";
// }



function tesTe() {
    const nome = document.getElementById("in-name").value;
    const idade = document.getElementById("in-idade").value;
    const e_mail = document.getElementById("in-email").value

    salvaItem("nome", nome);
    salvaItem("idade", 28);
    salvaItem("email", "davi.duarte@gmail.com");

    const userName = {
        name: [nome],
        age: [idade],
        email: [e_mail]
    }

    console.log('objeto userName: ', userName);
}