const locales = [
  {
    nombre: "Cine",
    informacion: "Calle X",
    link: "https://www.ngenespanol.com/wp-content/uploads/2018/08/En-este-pa%C3%ADs-volver%C3%A1n-haber-cines-comerciales-despu%C3%A9s-de-30-a%C3%B1os-1280x720.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Canchas de Fútbol",
    informacion: "Calle X",
    link: "https://lh3.googleusercontent.com/proxy/nxFqkGz-3ADDdJygdPtVs_DucuSo0kiipQKlh77o18ItfGMIFfEx6hRbj_QOmseqqYTn6Yrr5J3OTWxTh8yCMKWwB-cF6ZgJw_Jyp0BeGqd3_1myN3KwUPz5FXg2t6Z7ATkestaedLEPMSINzLChD55Ppg6qrDFVsg90D15-",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Tennis",
    informacion: "Calle X",
    link: "https://www.tennisworldes.com/imgb/1806/medidas-oficiales-de-las-canchas-de-tenis.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Kayaks",
    informacion: "Calle X",
    link: "https://elviajerofeliz.com/wp-content/uploads/2020/06/Kayak-deporte-verano-1.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Pesca",
    informacion: "Calle X",
    link: "https://verdeyazul.diarioinformacion.com/wp-content/uploads/2021/03/fikret-kabay-en-Pixabay-fishing-4933219_1920.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
];
const main = document.getElementsByTagName("main")[0];

const crearYAgregar = (local)=> {
  const contenedor = document.createElement("section");
  const nombre = document.createElement("h2");
  const imagen = document.createElement("img");
  const informacion = document.createElement("p");
  const button = document.createElement("button");
  const linkButton = document.createElement("link");

  
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

