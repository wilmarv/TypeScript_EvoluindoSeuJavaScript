import NegociacaoController from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');

form.addEventListener('submit',
    evento => {
        evento.preventDefault();
        controller.adicionar();
    });