const locales = [
  {
    nombre: "TA-TA",
    informacion: "J. Batlle Y Ordonez 609",
    link: "//www.enqueinvertir.cl/wp-content/uploads/2018/12/Tata_San_Carlos.png",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "El Dorado",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://sc2.elpais.com.uy/files/article_main/uploads/2021/03/26/605e4652f0a3d.jpeg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Devoto" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Supermercado_Devoto_-_panoramio.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Supermercado A" ,
    informacion: "18 de Julio 408",
    link: "https://i.blogs.es/0baa91/39f95492-38ee-4f16-92e1-ba5161f4a958/1366_2000.jpeg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Supermercado B",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://imagenes.elpais.com/resizer/JJIibWqM-VdG0KtEUagEpFIYjCk=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2MRLAMWNLJE3TBYELF4EGKKREQ.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Supermercado C",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2021/05/26/mujer-joven-comprando-en-el-supermercado-con-mascarilla.jpeg",
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

