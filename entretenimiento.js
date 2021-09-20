const locales = [
  {
    nombre: "Cine",
    informacion: 70,
    link: "https://static11.com-hotel.com/uploads/hotel/61376/photo/hotel-crown_15332322651.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Canchas de Fútbol",
    informacion: 70,
    link: "https://media-cdn.tripadvisor.com/media/photo-s/09/fd/df/6c/dsc-0341-largejpg.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Tennis",
    informacion: 70,
    link: "https://images.unsplash.com/photo-1628079251261-624e723b7326?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Kayaks",
    informacion: 70,
    link: "https://images.unsplash.com/photo-1628132232967-fb1807288edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Pesca",
    informacion: 70,
    link: "https://images.unsplash.com/photo-1628134187787-51c21f177a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Musica en vivo",
    informacion: 70,
    link: "https://images.unsplash.com/photo-1626379801357-537572de4ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  }
];
const main = document.getElementsByTagName("main")[0];

const crearYAgregar = (local)=> {
  const contenedor = document.createElement("section");
  const nombre = document.createElement("h2");
  const imagen = document.createElement("img");
  const informacion = document.createElement("p");
  const button = document.createElement("button");
  const linkButton = document.createElement("link");

  
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

  informacion.textContent = `Por tan solo: $${local.informacion}`;

  main.appendChild(contenedor);
}

const filtrarDisponibles = (locales)=> {
  return locales.filter((item)=> item.disponible)

}
const disponibles = filtrarDisponibles(locales);

console.log(disponibles)


for (let i = 0; i < locales.length; i++) {
  crearYAgregar(disponibles[i]);
}

