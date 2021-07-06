class DateHelper {
    // criando uma class datehelper para facilitar a estrutura, assim atraves de uma chamada é possivel repetir varias vezes o mesmo trecho sem repetir a digitação do código
    dataParaTexto(Data) {
     return Data.getDate() + "/" + (Data.getMonth() + 1) + "/" + Data.getFullYear(); // padronizando a data "11/11/1111"
    }

    textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}