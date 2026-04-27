//function mostrarMensaje() {
//document.getElementById("mensaje").innerText = "Gracias por visitar mi perfil 👋";
//}

function showMoreGilda() {
  document.getElementById("contactoGilda").innerHTML = "Contacto: +3415846415";
}

// Cambia el modo visual de las tarjetas
function toggleTarjetas() {
  document.body.classList.toggle("modo-tarjetas");

  const boton = document.getElementById("btn-luz");

  if (document.body.classList.contains("modo-tarjetas")) {
    boton.innerText = "Modo claro";
  } else {
    boton.innerText = "Modo oscuro";
  }
}