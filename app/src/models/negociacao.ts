class Negociacao {

    constructor(
        readonly _data: Date,
        readonly quantidade: number,
        readonly valor: number
    ) { }

    get volume() {
        return this.quantidade * this.valor;
    }
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
export default Negociacao;