class NegociacaoController {
  constructor() {
    //alert('chamando o controller');

    let $ = document.querySelector.bind(document); // transformando o document em uma variavel acessivel

    this._inputData = $("#data"); // percorrendo o dom para pegar as informações dos campos do formulário
    this._inputQuantidade = $("#quantidade"); // percorrendo o dom para pegar as informações dos campos do formulário
    this._inputValor = $("#valor"); // percorrendo o dom para pegar as informações dos campos do formulário
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();

    // focus assim que o usuario preencher os dados e inserir volta o cursor para a data
  }
}
