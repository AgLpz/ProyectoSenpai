const locales = [
  {
    nombre: "Bar A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://i.pinimg.com/originals/7a/18/63/7a1863aa0dcfd4c29749daed2a452e8a.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Bar B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://images.adsttc.com/media/images/5a32/4c74/b22e/385c/9e00/009f/large_jpg/250917__-__Antares_Guemes_ph_G_Viramonte-7896.jpg?1513245806",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Minimercados 24hs" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Sekt-im-supermarkt.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Cervecería" ,
    informacion: "18 de Julio 408",
    link: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/27171104/cerveceria-1516.jpg",
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

