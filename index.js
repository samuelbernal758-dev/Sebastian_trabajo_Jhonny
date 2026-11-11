const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const tabla = document.getElementById("tabla-registros");

let likes = 0;

function obtenerHora() {
  const ahora = new Date();
  const h = String(ahora.getHours()).padStart(2, "0");
  const m = String(ahora.getMinutes()).padStart(2, "0");
  const s = String(ahora.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

boton.addEventListener("click", () => {
  likes++;
  actualizarContador();

  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  const celdaHora = document.createElement("td");
  celdaNumero.textContent = likes;
  celdaHora.textContent = obtenerHora();
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  tabla.prepend(fila); 
});