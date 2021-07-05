class Negociacao {
    
    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
   // Métodos acessores, assim deixa estes metodos privados e não podem ser acessado por fora da classe
    get Volume() { 
        return this._quantidade * this._valor;
    }
    get Data() {
       return this._data;
    }
    get Quantidade() {
       return this._quantidade ;
    }
    get Valor() {
       return this._valor;
    }
}
