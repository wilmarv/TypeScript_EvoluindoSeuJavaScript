abstract class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento.querySelector(seletor);
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    abstract template(model: T): string;
}
export default View;