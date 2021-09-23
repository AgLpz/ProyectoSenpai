const locales = [
  {
    nombre: "Hotel CROWN Melo",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://static11.com-hotel.com/uploads/hotel/61376/photo/hotel-crown_15332322651.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Hotel Juana de América",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://media-cdn.tripadvisor.com/media/photo-s/09/fd/df/6c/dsc-0341-largejpg.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Hotel Virrey Pedro de Melo" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "http://www.hotelesencerrolargo.com.uy/cache/com_zoo/images/1-hotel-del-virrey-melo_2b76596d3034b2bbf008e5403627924a.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Posada La Comandancia" ,
    informacion: "18 de Julio 408",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfd1thD4NL8qMFLJbrZHd84IWo4OD94pmOLFPezsdxfXMFQ0vRruKNJXRmiuZHAOMULI&usqp=CAU",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaLaComandancia.html'",


  },
  {
    nombre: "Posada Imperial",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233291461.jpg?k=7125438f83d3256a2ce6bf9a7df6e2a0f5422f6701baca54b8a228013057d9fe&o=&hp=1",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaImperial.html'",


  },
  {
    nombre: "Estancia El Rosario",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/39/34/3934034_v1.jpeg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/estanciaElRosario.html'",


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

