const locales = [
  {
    nombre: "Tienda A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tienda-ropa-hombre-uniqlo-barcelona-japon-1509382416.jpg?crop=1xw:1xh;center,top&resize=480:*",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Tienda B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://rincondelemprendedor.es/wp-content/uploads/2021/03/tienda-de-ropa.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Tienda C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Tienda D" ,
    informacion: "18 de Julio 408",
    link: "https://images.pexels.com/photos/8386665/pexels-photo-8386665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaLaComandancia.html'",


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

