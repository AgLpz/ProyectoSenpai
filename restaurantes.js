const locales = [
  {
    nombre: "Restaurante A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://gestion.pe/resizer/h6Zig3yPGvhlUSwmFYYROlq2I7o=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2YSGG6JP3NGRVPYV3NY5VT7VYU.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Restaurante B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://www.hola.com/imagenes/decoracion/20200124158920/decoracion-interiores-nuevos-restaurantes-diseno/0-773-846/restaurantes-5a-a.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Restaurante C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://www.experimenta.es/wp-content/uploads/2017/10/Restaurant-Bar-Design-Awads-2017-Piccolino-Hachem-experimenta-3-e1511513363350.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Restaurante D" ,
    informacion: "18 de Julio 408",
    link: "https://i2.wp.com/www.diegocoquillat.com/wp-content/uploads/2017/10/Koh-Lanta.jpg?ssl=1",
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

