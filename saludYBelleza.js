const locales = [
  {
    nombre: "SPA X",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://www.wheretraveler.com/sites/default/files/spa_cr_new_africa_for_shutterstock.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "SPA Y",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://bethelspa.com/sitio2/wp-content/uploads/2017/12/Spa-Blog-Photo_1.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda de cosméticos" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://muchosnegociosrentables.com/wp-content/uploads/2020/10/pasos-para-montar-una-tienda-de-maquillaje.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Perfumerías" ,
    informacion: "18 de Julio 408",
    link: "https://cdn.forbes.co/2019/12/Sin-t%C3%ADtulo2.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "SPA Z",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233291461.jpg?k=7125438f83d3256a2ce6bf9a7df6e2a0f5422f6701baca54b8a228013057d9fe&o=&hp=1",
    disponible: false,
    //Se marca como false para demostrar su funcionalidad.
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

