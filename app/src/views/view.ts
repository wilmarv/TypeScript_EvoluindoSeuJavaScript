import { inspect } from "../decorators/inspect.js";
import logarTempoDeExecucao from "../decorators/logarTempoDeExecucao.js";

abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento as HTMLElement;
        else throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
    }

    @inspect()
    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}
export default View;