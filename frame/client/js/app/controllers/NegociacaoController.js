class NegociacaoController {
  constructor() {
    //alert('chamando o controller');

    let $ = document.querySelector.bind(document); // transformando o document em uma variavel acessivel

    this._inputData = $("#data"); // percorrendo o dom para pegar as informações dos campos do formulário
    this._inputQuantidade = $("#quantidade"); // percorrendo o dom para pegar as informações dos campos do formulário
    this._inputValor = $("#valor"); // percorrendo o dom para pegar as informações dos campos do formulário
  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(
      ...this._inputData.value
        .split("-") // lendo o array da data e substituindo os separadores por -
        .map((item, indice) => item - (indice % 2))
    );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
      // FORMATANDO A DATA NO FORMATO 11/11/1111
    let diaMesAno = negociacao.Data.getDate() + "/" + (negociacao.Data.getMonth() + 1) + "/" + negociacao.Data.getFullYear();

    console.log(diaMesAno);
  }
}
