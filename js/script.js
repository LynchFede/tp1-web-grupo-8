//function mostrarMensaje() {
//document.getElementById("mensaje").innerText = "Gracias por visitar mi perfil 👋";
//}

// Cambia el modo visual de las tarjetas
function toggleTarjetas() {
  document.body.classList.toggle("modo-tarjetas");

  const boton = document.getElementById("btn-luz");

  if (document.body.classList.contains("modo-tarjetas")) {
    boton.innerText = "Encender la luz";
  } else {
    boton.innerText = "Apagar la luz";
  }
}