import NegociacoesDoDia from "../interfaces/negociacaoDoDia.js";
import Negociacao from "../models/negociacao.js";

class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Array<Negociacao>> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: Array<NegociacoesDoDia>) => {
                return ((dados.map(dataDeHoje => {
                    return new Negociacao(new Date(), dataDeHoje.vezes, dataDeHoje.montante);
                })))
            });
    }
}
export default NegociacoesService;