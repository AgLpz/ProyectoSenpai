const locales = [
  {
    nombre: "Veterinaria A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://cdn.euroinnova.edu.es/img/subidasEditor/11-1596082251.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Veterinaria B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1080x675.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Veterinaria C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://www.promedco.com/images/NOTICIAS_2020/reducir-estres-de-mascotas-1.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


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

