// Imágenes con URL fija en public/. Este archivo no importa nada de astro:assets porque también lo lee
// astro.config.mjs para añadir las imágenes al sitemap.

export const ogImage = {
  src: 'og-image.jpg',
  title: 'Cocina ecuatoriana · concepto de demostración',
  alt: 'Prototipo visual para una propuesta gastronómica inspirada en Ecuador',
};

// Las mismas fotos del local en JPG con URL fija en public/photos: el sitemap de imágenes y el JSON-LD necesitan
// direcciones estables, no las que genera astro:assets en cada build.
export const fotosPublicas = [
  {
    src: 'photos/0-entrada.jpg',
    lugar: 'Bienvenida',
    alt: 'Imagen de referencia del espacio original de Arko Restaurant en Barcelona',
  },
  {
    src: 'photos/1-lateral-entrada.jpg',
    lugar: 'Un encuentro de sabores',
    alt: 'Imagen de referencia del interior original de Arko Restaurant en Barcelona',
  },
  {
    src: 'photos/2-mesa-especial.jpg',
    lugar: 'Producto local',
    alt: 'Imagen de referencia de una mesa del espacio original de Arko Restaurant en Barcelona',
  },
  {
    src: 'photos/3-mesas.jpg',
    lugar: 'La experiencia',
    alt: 'Imagen de referencia del salón original de Arko Restaurant en Barcelona',
  },
  {
    src: 'photos/4-barra.jpg',
    lugar: 'La cocina',
    alt: 'Imagen de referencia de la barra original de Arko Restaurant en Barcelona',
  },
  {
    src: 'photos/5-barra-lateral.jpg',
    lugar: 'El cierre',
    alt: 'Imagen de referencia del espacio original de Arko Restaurant en Barcelona',
  },
  {
    src: 'photos/6-vinos.jpg',
    lugar: 'Bebidas',
    alt: 'Imagen de referencia de las vitrinas del espacio original de Arko Restaurant en Barcelona',
  },
];
