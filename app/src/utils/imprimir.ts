import Imprimivel from "./imprimivel.js";

function imprimir(...objetos: Array<Imprimivel>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
export default imprimir;