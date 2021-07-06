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

    let data = new Date(...
      this._inputData.value
        .split('-') // lendo o array da data e substituindo os separadores por -
        .map(function(item, indice) { // map uma função para criar um array no data, item é ano mes e dia cada um vira um item, o indice que é passado no parametro é a posição 
          if(indice == 1) { // posição do mes que fica no meio por isto 1, a contagem é feita de 0 em diante
            return item - 1; // retorna o mes com 1 a menos para padronizar 
          }
          return item;
        })
        
      );
    console.log(data);
  }
}
