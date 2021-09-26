const locales = [
  {
    nombre: "Abogado X",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://www.diariojuridico.com/wp-content/uploads/2021/03/abogado-penalista-barcelona-diario-juridico-.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Contador X",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://rafaelmillano.com/wp-content/uploads/2021/06/Cuanto-gana-un-contador-publico.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Escribano X" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "http://www.barindelli.com.uy/img/escribano.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Arquitecto X" ,
    informacion: "18 de Julio 408",
    link: "https://www.aprendemas.com/mx/blog/images/2017/03/arquitectura1.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaLaComandancia.html'",


  },
  {
    nombre: "Profesor X",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://www.unir.net/wp-content/uploads/2020/06/iStock-899355338.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaImperial.html'",


  },
  {
    nombre: "Desarrollador Web",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/estanciaElRosario.html'",


  },

];
const main = document.getElementsByTagName("main")[0];

const crearYAgregar = (local)=> {
  const contenedor = document.createElement("section");
  const nombre = document.createElement("h2");
  const imagen = document.createElement("img");
  const informacion = document.createElement("p");
  const button = document.createElement("button")

  
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
}

const filtrarDisponibles = (locales)=> {
  return locales.filter((item)=> item.disponible)

}
const disponibles = filtrarDisponibles(locales);

console.log(disponibles)


for (let i = 0; i < locales.length; i++) {
  crearYAgregar(disponibles[i]);
}

