import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";

function imprimir(...objetos: Array<Negociacao | Negociacoes>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
export default imprimir;