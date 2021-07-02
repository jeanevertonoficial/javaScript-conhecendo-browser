// lista parta varer com o DOM os campos da index, é uma api que deixa 
// ver os campo através do css
var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

console.log(campos);

document.querySelector('.from').addEventListener('submint', function(event) {
    alert('Oi');
});