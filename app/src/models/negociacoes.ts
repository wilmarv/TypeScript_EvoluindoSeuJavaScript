import Negociacao from "./negociacao.js";

class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    public adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}
export default Negociacoes;