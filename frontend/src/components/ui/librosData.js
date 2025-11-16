// 📚 DATOS COMPLETOS DE LOS LIBROS
export const librosData = [
  {
    id: 1,
    titulo: "One Piece",
    genero: "Aventura",
    tipo: "Cuentos",
    estado: "En emisión",
    imagen: "https://erikstore.com/blog/wp-content/uploads/2025/07/ONEPIECE_PERSONAJES.jpg",
    autor: "Eiichiro Oda",
    añoPublicacion: 1997,
    editorial: "Shueisha",
    volumenes: 107,
    capitulos: 1100,
    calificacion: 4.8,
    isbn: "978-4088725093",
    idioma: "Japonés (traducido)",
    sinopsis: "Monkey D. Luffy es un joven pirata cuyo sueño es convertirse en el Rey de los Piratas y encontrar el legendario tesoro conocido como 'One Piece'. Después de comer accidentalmente una Fruta del Diablo, su cuerpo adquiere las propiedades del caucho, permitiéndole estirarse como elástico. Junto a su diversa tripulación, los Piratas del Sombrero de Paja, Luffy navega por el Grand Line enfrentando enemigos peligrosos, descubriendo misterios antiguos y forjando amistades inquebrantables.",
    temas: ["Amistad", "Aventura", "Superación", "Libertad", "Justicia"],
    personajesPrincipales: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Nico Robin"],
    premios: ["Premio Shogakukan de Manga (2012)", "Récord Guinness por más copias publicadas"],
    datosInteresantes: [
      "Es el manga más vendido de todos los tiempos con más de 500 millones de copias",
      "La serie ha sido adaptada a anime, películas, videojuegos y obras de teatro",
      "Eiichiro Oda planea terminar la serie en aproximadamente 5 años"
    ],
    precio: "$12.99",
    disponibilidad: "Disponible",
    formatosDisponibles: ["Físico", "Digital", "Edición de coleccionista"]
  },
  {
    id: 2,
    titulo: "Naruto",
    genero: "Acción",
    tipo: "Cuentos",
    estado: "Finalizado",
    imagen: "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    autor: "Masashi Kishimoto",
    añoPublicacion: 1999,
    editorial: "Shueisha",
    volumenes: 72,
    capitulos: 700,
    calificacion: 4.6,
    isbn: "978-4088737645",
    idioma: "Japonés (traducido)",
    sinopsis: "Naruto Uzumaki es un joven ninja huérfano que alberga en su interior al Zorro Demonio de Nueve Colas, una criatura que atacó su aldea años atrás. A pesar de ser rechazado por muchos, Naruto sueña con convertirse en Hokage, el líder de su aldea, para ganar el reconocimiento de todos. A través de entrenamientos intensos, batallas épicas y la formación de vínculos profundos con sus compañeros, Naruto enfrenta su destino mientras descubre los secretos del mundo ninja.",
    temas: ["Perseverancia", "Amistad", "Redención", "Destino", "Familia"],
    personajesPrincipales: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Gaara"],
    premios: ["Premio Quill Award (2006)", "Animación del año en Tokio (2008)"],
    datosInteresantes: [
      "Ha vendido más de 250 millones de copias en todo el mundo",
      "La serie continuó con 'Boruto', centrada en el hijo de Naruto",
      "El anime cuenta con más de 700 episodios incluyendo Shippuden"
    ],
    precio: "$11.99",
    disponibilidad: "Disponible",
    formatosDisponibles: ["Físico", "Digital", "Box sets"]
  },
  {
    id: 3,
    titulo: "Death Note",
    genero: "Suspenso",
    tipo: "Novela",
    estado: "Finalizado",
    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/250px-Death_Note_Vol_1.jpg",
    autor: "Tsugumi Ohba",
    ilustrador: "Takeshi Obata",
    añoPublicacion: 2003,
    editorial: "Shueisha",
    volumenes: 12,
    capitulos: 108,
    calificacion: 4.7,
    isbn: "978-4088736204",
    idioma: "Japonés (traducido)",
    sinopsis: "Light Yagami es un estudiante brillante que encuentra un cuaderno sobrenatural llamado 'Death Note', que le otorga el poder de matar a cualquier persona cuyo nombre escriba en él. Convencido de que puede crear un mundo mejor eliminando a los criminales, Light comienza una cruzada como el misterioso 'Kira'. Sin embargo, el enigmático detective conocido solo como 'L' comienza a investigar estos extraños asesinatos, dando inicio a un juego mental de ajedrez entre dos genios.",
    temas: ["Justicia", "Moralidad", "Poder", "Inteligencia", "Consecuencias"],
    personajesPrincipales: ["Light Yagami", "L Lawliet", "Misa Amane", "Ryuk", "Near"],
    premios: ["Eagle Award (2008)", "Premio American Anime Awards"],
    datosInteresantes: [
      "Ha vendido más de 30 millones de copias mundialmente",
      "Se han realizado películas live-action en Japón y Netflix",
      "El manga fue censurado en algunos países por su contenido controvertido"
    ],
    precio: "$13.99",
    disponibilidad: "Disponible",
    formatosDisponibles: ["Físico", "Digital", "Black Edition"]
  },
  {
    id: 4,
    titulo: "Dune",
    genero: "Ciencia ficción",
    tipo: "Libro",
    estado: "Finalizado",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMCpT60jspoApxedXgvNIiFxBJI0eKFbtCQ&s",
    autor: "Frank Herbert",
    añoPublicacion: 1965,
    editorial: "Chilton Books",
    paginas: 688,
    calificacion: 4.9,
    isbn: "978-0441172719",
    idioma: "Inglés (traducido)",
    sinopsis: "En un futuro lejano, la humanidad se ha expandido por la galaxia bajo un sistema feudal interestelar. Paul Atreides, heredero de la Casa Atreides, se muda con su familia al planeta desértico Arrakis, la única fuente de 'melange' o 'especia', la sustancia más valiosa del universo. Cuando su familia es traicionada, Paul debe adentrarse en el desierto y unirse a los Fremen, el pueblo nativo de Arrakis, para cumplir una profecía antigua y vengar a su padre.",
    temas: ["Ecología", "Religión", "Política", "Poder", "Destino", "Supervivencia"],
    personajesPrincipales: ["Paul Atreides", "Lady Jessica", "Leto Atreides", "Chani", "Baron Harkonnen"],
    premios: ["Premio Nebula (1965)", "Premio Hugo (1966)"],
    datosInteresantes: [
      "Es considerada una de las mejores novelas de ciencia ficción de todos los tiempos",
      "Inspiró una saga de 6 libros escritos por Frank Herbert",
      "Ha sido adaptada a películas por David Lynch (1984) y Denis Villeneuve (2021-2024)"
    ],
    precio: "$18.99",
    disponibilidad: "Disponible",
    formatosDisponibles: ["Físico", "Digital", "Audiolibro", "Edición de lujo"]
  },
  {
    id: 5,
    titulo: "Dune",
    genero: "Ciencia ficción",
    tipo: "Libro",
    estado: "En emisión",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMCpT60jspoApxedXgvNIiFxBJI0eKFbtCQ&s",
    autor: "Frank Herbert",
    añoPublicacion: 1965,
    editorial: "Chilton Books",
    paginas: 688,
    calificacion: 4.9,
    isbn: "978-0441172719",
    idioma: "Inglés (traducido)",
    sinopsis: "En un futuro lejano, la humanidad se ha expandido por la galaxia bajo un sistema feudal interestelar.",
    temas: ["Ecología", "Religión", "Política"],
    personajesPrincipales: ["Paul Atreides", "Lady Jessica"],
    premios: ["Premio Nebula (1965)"],
    datosInteresantes: [
      "Es considerada una de las mejores novelas de ciencia ficción",
      "Inspiró una saga de 6 libros"
    ],
    precio: "$18.99",
    disponibilidad: "Disponible",
    formatosDisponibles: ["Físico", "Digital"]
  }
];


// 🎞️ GIFs por tipo de libro
export const gifsPorTipo = {
  Cuentos: "https://i.pinimg.com/736x/93/97/0d/93970dde9db766c47f4c39d82d2b778f.jpg",
  Novela: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanpqMHh2cDY1aGJlems3Zzh1OGpvMGR2ZGNxZjg0Z2NzcTE2dzM3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23hUeKyLx8eEriCx9L/giphy.gif",
  Libro: "https://img.freepik.com/fotos-premium/uma-biblioteca-magica-cheia-de-livros-flutuantes-e-manuscritos-encantados_1029473-316830.jpg",
};