const locales = [
    {
      nombre: "Centro de reparación de celulares",
      informacion: "J. Batlle Y Ordonez 609",
      link: "https://www.allgsmtips.com/wp-content/uploads/2015/10/free-cell-phone-repair-2-990x500.jpg",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",
  
  
    },
    {
      nombre: "Tienda de celulares A",                       
      informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
      link: "https://aws.admagazine.com/prod/designs/v1/assets/767x384/57482.jpg",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",
  
  
    },
    {
      nombre: "Tienda de celulares B" ,
      informacion: "Gral. 727, Justino Muniz, Melo",
      link: "https://www.apple.com/newsroom/images/environments/stores/Apple_sanlitun-beijing-opening-exterior-07162020.jpg.og.jpg?202108061040",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",
  
  
    },
    {
      nombre: "Tienda de fotografía" ,
      informacion: "18 de Julio 408",
      link: "https://www.focalpointphoto.com/wp-content/uploads/2013/02/Focal-Point-103.jpg",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/posadaLaComandancia.html'",
  
  
    },
    {
      nombre: "Tienda de drones",
      informacion: "Bvar. Francisco Mata 333",
      link: "https://miro.medium.com/max/600/1*gbSX4-Kssynywlm_7E-Gmg.png",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/posadaImperial.html'",
  
  
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
  
  