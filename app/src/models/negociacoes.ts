import Modelo from "../interfaces/modelo.js";
import Negociacao from "./negociacao.js";

class Negociacoes implements Modelo<Negociacoes> {
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

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
export default Negociacoes;