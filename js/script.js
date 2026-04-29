const integrantes = [
  {
    nombre: "Federico Lynch",
    rol: "Desarrollador Frontend",
    img: "img/avatar_fede.png",
    link: "integrante1.html"
  },
  {
    nombre: "Gilda Morgante",
    rol: "Desarrollador Frontend",
    img: "img/avatar_Gilda.jpg",
    link: "integrante2.html"
  },
  {
    nombre: "Nahuel Rodríguez",
    rol: "Desarrollador Frontend",
    img: "img/avatar_nahuel.jpg",
    link: "integrante3.html"
  },
  {
    nombre: "David Egert",
    rol: "Desarrollador Frontend",
    img: "img/avatar_david.png",
    link: "integrante4.html"
  },
  {
    nombre: "Cristina Roma",
    rol: "Desarrolladora Frontend",
    img: "img/avatar_cristina.png",
    link: "integrante5.html"
  }
];

function cargarComponente(id, archivo) {
  fetch(archivo)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error cargando componente:", error));
}

function generarTarjetas() {
  const contenedor = document.getElementById("contenedor-tarjetas");

  integrantes.forEach((persona, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <img src="${persona.img}" alt="${persona.nombre}" class="avatar-card">
      <h3>${persona.nombre}</h3>
      <p>${persona.rol}</p>
      <a href="${persona.link}" class="boton">Ver perfil</a>
    `;

    contenedor.appendChild(tarjeta);

    setTimeout(() => {
      tarjeta.classList.add("visible");
    }, index * 200);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  cargarComponente("header", "componentes/header.html");
  cargarComponente("footer", "componentes/footer.html");

  const contenedor = document.getElementById("contenedor-tarjetas");
  if (contenedor) {
    generarTarjetas();
  }

  const perfil = document.querySelector("main.perfil");
  if (perfil) {
    setTimeout(() => {
      perfil.classList.add("visible");
    }, 100);
  }
});


//function mostrarMensaje() {
//document.getElementById("mensaje").innerText = "Gracias por visitar mi perfil 👋";
//}

function showMoreGilda() {
  document.getElementById("contactoGilda").innerHTML = "Contacto: +3415846415";
}

// función para mostrar/ocultar información de contacto en integrante5.html
function toggleContacto() {
  const info = document.getElementById("info-contacto");
  const boton = document.getElementById("btn-contacto");

  info.classList.toggle("activo");

  if (info.classList.contains("activo")) {
    boton.innerText = "Ocultar contacto";
  } else {
    boton.innerText = "Ver contacto";
  }
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