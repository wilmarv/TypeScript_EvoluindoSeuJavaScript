import NegociacaoController from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');

if (form)
    form.addEventListener('submit',
        evento => {
            evento.preventDefault();
            controller.adicionar();
        });
else throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe!");

const botaoImporta = document.querySelector("#botao-importa");

if (botaoImporta)
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
else
    throw Error("Botão importa não foi encontrado");

