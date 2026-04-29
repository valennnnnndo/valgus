var cant = [1, 1];
var nombres = ["Termo", "Mate"];

function cambiar(i, d) {
  if (cant[i] + d >= 1) cant[i] += d;
  document.getElementById("qty-" + i).textContent = cant[i];
}

function comprar(i) {
  document.getElementById("mensaje").textContent =
    "Compraste " + cant[i] + " " + nombres[i] + "s";
}
