const button = document.getElementById("boton-registro");
const div = document.getElementById("mensaje-registro");


button.addEventListener("click", function (event) {
    event.preventDefault();
    div.style.display = "block";
    setTimeout(function () {
        div.style.display = "none";
        document.getElementById("registro").reset();
    }, 1000);

});
var butn = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  event.preventDefault(); // Evita la recarga de la página
  // Tu código aquí
  console.log('El botón ha sido presionado');
});