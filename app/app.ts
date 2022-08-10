import Negociacao from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 33.50);

console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.valor);