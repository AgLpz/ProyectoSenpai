const locales = [
    {
      nombre: "Mueblería A",
      informacion: "J. Batlle Y Ordonez 609",
      link: "https://lh3.googleusercontent.com/FZEOCr_O801KC6cLpPWDIdB-l9Cb9Kv9qsVpffffKgHaIzn8wk363lloGOWlCgQb7BuLmAKoCc3qkNRc=w768-h768-n-o-v1",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",
  
  
    },
    {
      nombre: "Mueblería B",                       
      informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
      link: "https://urufacil.uy/wp-content/uploads/2019/03/image-2019-03-02T113120.466.jpg",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",
  
  
    },
    {
      nombre: "Mueblería C" ,
      informacion: "Gral. 727, Justino Muniz, Melo",
      link: "https://ss-static-01.esmsv.com/id/123250/galeriaimagenes/obtenerimagen/?id=103&tipoEscala=stretch&width=2048&height=1365",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",
  
  
    },  
    
    {
      nombre: "Mueblería D" ,
      informacion: "Gral. 727, Justino Muniz, Melo",
      link: "https://media.istockphoto.com/photos/women-buying-new-furniture-picture-id520294045?k=20&m=520294045&s=612x612&w=0&h=OaDOetXZogLbgJ_Qb-kgCyggkgLnmsMy1O1uhTXxrZI=",
      disponible: true,
      button: "Ver más",
      linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",
  
  
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
  
  