import Negociacao from "./negociacao.js";

class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}
export default Negociacoes;