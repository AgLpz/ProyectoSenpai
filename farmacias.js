const locales = [
  {
    nombre: "Farmashop",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://infonegocios.biz/uploads/farmashop100localesenuy.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Farmacia San Roque",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://tramitesuruguay.com/wp-content/uploads/2021/07/farmacia-san-roque-300x226.png",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Farmacia C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://i.pinimg.com/originals/bf/7d/9b/bf7d9b4e1c44840ae4e91e9729be2877.jpg",
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

