class DateHelper {
  constructor() {
    throw new error("DateHelper não pode ser instânciada");
  }
  // criando uma class datehelper para facilitar a estrutura, assim atraves de uma chamada é possivel repetir varias vezes o mesmo trecho sem repetir a digitação do código
  static dataParaTexto(Data) {
    return `${Data.getDate()}/${Data.getMonth() + 1}/${Data.getFullYear()}`; // padronizando a data "11/11/1111"
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))  // formatando e passano uma validação para o formato da DATA
      throw new Error("Data deve estar no formato padrão aaaa-mm-dd"); // mensagem de erro se a data não for igual o padrão exigido 
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }
}
