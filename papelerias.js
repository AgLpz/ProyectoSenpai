const locales = [
  {
    nombre: "Papelería A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://cdn.shopify.com/s/files/1/0744/1969/articles/Papeleria-02_800x.png?v=1592605464",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://emprendeconhuevos.com/wp-content/uploads/2019/07/nombres-para-papelerias-y-librerias.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://hidalgo.quadratin.com.mx/www/wp-content/uploads/2019/06/papelerias.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería D" ,
    informacion: "18 de Julio 408",
    link: "https://definicionyque.es/wp-content/uploads/2018/04/papeleria_.jpg",
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

