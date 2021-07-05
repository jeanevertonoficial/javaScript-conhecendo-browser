// lista parta varer com o DOM os campos da index, é uma api que deixa 

// ver os campo através do css

var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

var tbody = document.querySelector("table tbody");
// querySelectot .from pega tudo que estiver dentro do from no html, .addEventListener submit, ao clicar em concluir terá um evendo no botão de varedura 
document.querySelector(".form").addEventListener("submit", function(event) {
  event.preventDefault();

  var tr = document.createElement("tr"); // variaveis 

  campos.forEach(function (campo) {
    var td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  // Fazendo uma limpeza nos campos após a inserção de dados
  campos[0].value = ""; // por padrão
  campos[1].value = 1; // por padrão
  campos[2].value = 0; // por padrão

  campos[0].focus(); // por padrão
});