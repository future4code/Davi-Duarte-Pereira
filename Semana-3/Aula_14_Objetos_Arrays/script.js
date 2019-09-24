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

let nome = [];
let idade = [];
let e_mail = [];

function tesTe() {
    nome.push(document.getElementById("in-name").value);
    idade.push(document.getElementById("in-idade").value);
    e_mail.push(document.getElementById("in-email").value);

    salvaItem("nome", nome);
    salvaItem("idade", idade);
    salvaItem("email", e_mail);

    nome = buscaItem("nome");
    idade = buscaItem("idade");
    e_mail = buscaItem("email");

    const userName = {
        name: nome,
        age: idade,
        email: e_mail
    }

    console.log('objeto userName: ', userName);


    console.log(userName.name[0]);

    document.getElementById("in-name").value = "";
    document.getElementById("in-idade").value = "";
    document.getElementById("in-email").value = "";
}


