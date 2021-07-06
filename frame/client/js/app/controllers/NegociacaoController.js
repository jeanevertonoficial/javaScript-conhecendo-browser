class NegociacaoController {

  constructor() {
    
        //alert('chamando o controller');
    
        let $ = document.querySelector.bind(document); // transformando o document em uma variavel acessivel
    
        this.inputData = $('#data'); // percorrendo o dom para pegar as informações dos campos do formulário
        this.inputQuantidade = $('#quantidade'); // percorrendo o dom para pegar as informações dos campos do formulário
        this.inputValor = $('#valor'); // percorrendo o dom para pegar as informações dos campos do formulário 

  }

  adiciona(event) {
    event.preventDefault();

    console.log(this.inputData.value);
    console.log(this.inputQuantidade.value);
    console.log(this.inputValor.value);
  }
}
