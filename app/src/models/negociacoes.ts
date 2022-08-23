import Negociacao from "./negociacao.js";

class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    public adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

}
export default Negociacoes;