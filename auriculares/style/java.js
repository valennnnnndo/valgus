let cantidad = 0;
const boton = document.getElementById("boton-comprar");
function agregarAlCarrito() {
  cantidad = cantidad + 1;
  document.getElementById("count").textContent = cantidad;
}
boton.addEventListener("click", agregarAlCarrito);
