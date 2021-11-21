
const main = document.getElementsByTagName("main")[0];

const crearYAgregar = (local) => {
  const contenedor = document.createElement("section");
  const nombre = document.createElement("h2");
  const imagen = document.createElement("img");
  const informacion = document.createElement("p");
  const button = document.createElement("button");

  contenedor.appendChild(nombre);
  contenedor.appendChild(imagen);
  contenedor.appendChild(informacion);
  contenedor.appendChild(button);

  contenedor.classList.add("local");
  nombre.textContent = local.nombre;
  button.textContent = local.button;

  button.setAttribute("onclick", local.linkButton);
  imagen.setAttribute("src", local.link);
  imagen.setAttribute("alt", local.nombre);

  informacion.textContent = `Puedes encontrarlos en: ${local.informacion}`;

  main.appendChild(contenedor);
};

const filtrarDisponibles = (locales) => {
  return locales.filter((item) => item.localMascotas);
};

function cargarLocal() {
  fetch("http://localhost:3000/auth/locales", {
    method: "GET",
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuestaJSON) {
      const local = respuestaJSON.local;

      const disponibles = filtrarDisponibles(local);

      for (i = 0; i < local.length; i++) {
        crearYAgregar(disponibles[i]);
      }
    });
}

cargarLocal();