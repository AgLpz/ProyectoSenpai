const locales = [
  {
    nombre: "Policía",
    informacion: 70,
    link: "https://lh3.googleusercontent.com/proxy/ZQ4_3v04gg_mTUugMq784vXBCDQWNRjrCO5iePTJG_cwc4xgnNXVzPixoplTOTi-2RyVmPkvHaj0zs76QvI69E-1y3g3FEcQ71LJxr-amNig5WhXrC2mABoauBkbs0aYBoyn",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Bomberos",
    informacion: 70,
    link: "http://www.lagomerin.com.uy/images/bomberos-melo.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaBomberos.html'",



  },
  {
    nombre: "Hospitales Públicos",
    informacion: 70,
    link: "https://www.asse.com.uy/imgnoticias/201606/H400/53687.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaHPublico.html'",
    



  },
  {
    nombre: "Centros de Salud privados",
    informacion: 70,
    link: "https://www.camcel.com.uy/images/blue.jpg",
    disponible: true,
    button: "Ver mas",
    linkButton: "location.href='./emergenciaCSPriv.html'",
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


  informacion.textContent = `Por tan solo: $${local.informacion}`;

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

