const locales = [
  {
    nombre: "Kiosco A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2019/02/473701.jpg?7.2.4",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Kiosco B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://veredes.es/blog/wp-content/uploads/2019/01/El-mobiliario-urbano-y-la-revoluci%C3%B3n.-Los-kioscos-Jelena-Prokopljevi%C4%87-Kiosco-tienda-1024x738.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Kiosco C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://sc2.elpais.com.uy/files/article_default_content/uploads/2021/09/16/6143327ef2949.jpeg",
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

