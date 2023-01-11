// Selecionar cada um dos elementos do formulário
const form = document.querySelector("#form");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const jobSelector = document.querySelector("#job");
const messageTextArea = document.querySelector("#message")

// Criar um evento ao formulario de submit
form.addEventListener("submit", (event) => {

    // Evento não será enviado como page reload
    event.preventDefault();

    let emailValue = email.value;
    this.verificaEmailValido(emailValue);
    this.verificaSeONomeEstaVazio(nome);


    form.submit();
    
});

function verificaEmailValido(email){

    const regex = "/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ig";

    if (!regex.match(email)) {
        return 0;
    } else {
        return 1;
    }
}

function verificaSeONomeEstaVazio(nome) {
    if (nome === '') {

    }
}
