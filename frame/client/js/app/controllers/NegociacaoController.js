class NegociacaoController {

  constructor() {
    
        //alert('chamando o controller');
    
        let $ = document.querySelector.bind(document); // transformando o document em uma variavel acessivel
    
        this._inputData = $('#data'); // percorrendo o dom para pegar as informações dos campos do formulário
        this._inputQuantidade = $('#quantidade'); // percorrendo o dom para pegar as informações dos campos do formulário
        this._inputValor = $('#valor'); // percorrendo o dom para pegar as informações dos campos do formulário 

  }

  adiciona(event) {
    event.preventDefault();

   // let data = new Date(this._inputData.value.split('-')); // split serve como um separador
    let data = new Date(this._inputData.value.replace(/-/g, ',')); // replece serve como um separador e troca de caractere 
    console.log(data);
  }
}
