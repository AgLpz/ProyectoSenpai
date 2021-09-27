const locales = [
  {
    nombre: "Vidriero X",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_51884997_subscription_monthly_m-1615888840.webp",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Cerrajero X",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://contrainformacion.es/wp-content/uploads/2020/11/Cerrajero.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Plomero" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://muchosnegociosrentables.com/wp-content/uploads/2017/06/C%C3%B3mo-iniciar-un-servicio-de-fontanero-o-plomero.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Pintor" ,
    informacion: "18 de Julio 408",
    link: "https://homesolution.net/blog/wp-content/uploads/2019/01/IMG_5613.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Mecánico",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://lh3.googleusercontent.com/proxy/DZCREpJU0Oy68BZMJ__v7HATdzYHpaftUko-aaqfdnYfKK5PJW4kW9YVGCWaS7BmJSm6o9tz318k28SkPmrnEFu_kCBGhBIs01e1IOlKdd5PBYmN4A",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


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

