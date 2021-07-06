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

        let negociacao = new Negociacao(
          DateHelper.textoParaData(this._inputData.value),
          this._inputQuantidade.value,
          this._inputValor.value
        );


       // console.log(negociacao);

        console.log(DateHelper.dataParaTexto(negociacao.Data));
    }
}
