const button = document.getElementById("boton-registro");
const div = document.getElementById("mensaje-registro");


button.addEventListener("click", function(event) {
  event.preventDefault();
  div.style.display = "block";
setTimeout(function() {
    div.style.display = "none";
    document.getElementById("registro").reset();
  }, 1000);

});
