class Negociacao {
    
    constructor(data, quantidade, valor) {
        // garantindo a blindagem da classe 
        this._data = new Date(data.getTime()); // protegendo a data de ser mudada por de fora da classe
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // congelando um estancia, assim não é possivel fazer alterações fora da class nos objetos, porem é razo !!
    }
   // Métodos acessores, assim deixa estes metodos privados e não podem ser acessado por fora da classe
    get Volume() { 
        return this._quantidade * this._valor;
    }
    get Data() {
       return new  Date(this._data.getTime()); // programação defensiva
    }
    get Quantidade() {
       return this._quantidade ;
    }
    get Valor() {
       return this._valor;
    }
}
