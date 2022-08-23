import domInjector from "../decorators/domInject.js";
import inspect from "../decorators/inspect.js";
import logarTempoDeExecucao from "../decorators/logarTempoDeExecucao.js";
import DiasDaSemana from "../enums/diasDaSemana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import NegociacoesService from "../services/negociacoesService.js";
import MensagemView from "../views/mensagemView.js";
import NegociacoesView from "../views/negociacoesView.js";

class NegociacaoController {
    @domInjector("#data")
    private inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect()
    @logarTempoDeExecucao()
    public adicionar(): void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.
                update('Apenas negociações em dias úteis são aceitas!');
            return;
        }

        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    public importaDados(): void {
        this.negociacoesService.obterNegociacoesDoDia()
            .then(negciacoesDeHoje => {
                for (let negociacao of negciacoesDeHoje)
                    this.negociacoes.adicionar(negociacao);
                this.negociacoesView.update(this.negociacoes);
            });
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
export default NegociacaoController;