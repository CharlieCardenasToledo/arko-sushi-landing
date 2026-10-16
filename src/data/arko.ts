// Contenido de demostración para un concepto gastronómico inspirado en Ecuador.
// No representa un negocio activo: ubicación, menú, precios y contacto requieren datos reales.

import type { ImageMetadata } from 'astro';
import entrada from '../assets/photos/0-entrada.webp';
import lateralEntrada from '../assets/photos/1-lateral-entrada.webp';
import mesaEspecial from '../assets/photos/2-mesa-especial.webp';
import mesas from '../assets/photos/3-mesas.webp';
import barra from '../assets/photos/4-barra.webp';
import barraLateral from '../assets/photos/5-barra-lateral.webp';
import vinos from '../assets/photos/6-vinos.webp';
import poster1 from '../assets/paseo/paseo-1.webp';
import poster2 from '../assets/paseo/paseo-2.webp';
import poster3 from '../assets/paseo/paseo-3.webp';
import poster4 from '../assets/paseo/paseo-4.webp';
import poster5 from '../assets/paseo/paseo-5.webp';
import poster6 from '../assets/paseo/paseo-6.webp';

export const photos = { entrada, lateralEntrada, mesaEspecial, mesas, barra, barraLateral, vinos };

export const seo = {
  title: 'Cocina ecuatoriana · Concepto gastronómico de demostración',
  description:
    'Prototipo visual inspirado en la diversidad de sabores del Ecuador. Los datos de ubicación, menú, precios y contacto son de ejemplo.',
};

export type Parada = {
  id: string;
  lugar: string;
  clip: string;
  focus: number;
  poster: ImageMetadata;
  alt: string;
};

export const paseo: { paradas: Parada[] } = {
  paradas: [
    { id: 'inicio', lugar: 'Bienvenida', clip: 'video/paseo-1.mp4', focus: 50, poster: poster1, alt: 'Espacio gastronómico de referencia para el prototipo visual' },
    { id: 'nikkei', lugar: 'Un encuentro de sabores', clip: 'video/paseo-2.mp4', focus: 50, poster: poster2, alt: 'Interior de referencia con espejos y mobiliario de madera' },
    { id: 'precio', lugar: 'Producto local', clip: 'video/paseo-3.mp4', focus: 50, poster: poster3, alt: 'Mesa de referencia dentro del espacio gastronómico' },
    { id: 'producto', lugar: 'La experiencia', clip: 'video/paseo-4.mp4', focus: 50, poster: poster4, alt: 'Salón de referencia con mesas de madera y luz cálida' },
    { id: 'shari', lugar: 'La cocina', clip: 'video/paseo-5.mp4', focus: 50, poster: poster5, alt: 'Barra de referencia para presentar una propuesta culinaria' },
    { id: 'como-reservar', lugar: 'El cierre', clip: 'video/paseo-6.mp4', focus: 50, poster: poster6, alt: 'Barra de referencia con botellas y detalles decorativos' },
  ],
};

export const links = {
  reservar: '#experiencias',
  regalar: '#experiencias',
  carta: '#carta',
  maps: '#ubicacion',
  instagram: 'https://charliecardenastoledo.com/',
  telefono: '#contacto',
  email: 'https://charliecardenastoledo.com/',
};

export const contacto = {
  calle: 'Ubicación por definir',
  ciudad: 'Ecuador · ciudad por definir',
  codigoPostal: '',
  localidad: 'Ecuador',
  barrio: 'Por definir',
  telefono: 'Por definir',
  email: 'Por definir',
  instagram: 'Redes por definir',
  horario: 'Horario por definir',
  cocina: 'Propuesta gastronómica de ejemplo',
};

export const legal = [];

export const nav = [
  { label: 'Concepto', href: '#nikkei' },
  { label: 'Propuesta', href: '#carta' },
  { label: 'Experiencia', href: '#experiencias' },
  { label: 'Preguntas', href: '#preguntas' },
];

export const experiencias = [
  {
    nombre: 'Recorrido de sabores',
    descripcion: 'Ejemplo de menú para compartir inspirado en ingredientes ecuatorianos.',
    precio: '$40,00 USD · demo',
    porPersona: 'Precio de ejemplo; no disponible para compra',
  },
  {
    nombre: 'Experiencia de temporada',
    descripcion: 'Ejemplo de menú degustación. Composición y disponibilidad por definir.',
    precio: '$65,00 USD · demo',
    porPersona: 'Precio de ejemplo; no disponible para compra',
    etiqueta: 'Propuesta de ejemplo',
  },
];

export const maridaje = {
  nombre: 'Bebidas de temporada',
  descripcion: 'Selección de ejemplo con sabores de la región. Oferta real por definir.',
  precio: '$15,00 USD · demo',
};

export const platos = [
  { nombre: 'Ceviche de camarón', detalle: 'Ejemplo de propuesta; receta y disponibilidad por definir' },
  { nombre: 'Tiradito de pesca local', detalle: 'Ejemplo de propuesta con cítricos de temporada' },
  { nombre: 'Nigiri de atún y ají criollo', detalle: 'Ejemplo de fusión nikkei ecuatoriana' },
  { nombre: 'Plátano verde y vegetales', detalle: 'Ejemplo de acompañamiento; receta por definir' },
  { nombre: 'Cacao ecuatoriano y fruta', detalle: 'Ejemplo de postre; ingredientes por definir' },
];

export const prensa = {
  medio: 'Proyecto de demostración',
  fecha: 'Contenido de ejemplo',
  titular: 'Una propuesta gastronómica inspirada en Ecuador',
  entradilla:
    'Este prototipo explora cómo presentar una experiencia culinaria ecuatoriana. No representa un restaurante activo ni incluye reseñas o menciones de prensa verificadas.',
  url: '#contacto',
};

export type Faq = { pregunta: string; respuesta: string; pending?: string };

export const faqs: Faq[] = [
  {
    pregunta: '¿Este sitio corresponde a un restaurante abierto?',
    respuesta: 'No. Es un prototipo visual de demostración. No acepta reservas, pedidos ni pagos.',
  },
  {
    pregunta: '¿Dónde estaría ubicado?',
    respuesta: 'En Ecuador; la ciudad y la dirección del negocio aún están por definir.',
  },
  {
    pregunta: '¿La carta y los precios son reales?',
    respuesta: 'No. Los platos y valores en USD son ejemplos para mostrar el diseño y no están disponibles para compra.',
  },
  {
    pregunta: '¿Qué inspira la propuesta?',
    respuesta: 'Una posible cocina nikkei ecuatoriana que combine técnicas japonesas con ingredientes y sabores de Ecuador.',
  },
  {
    pregunta: '¿Cómo puedo reservar?',
    respuesta: 'Las reservas no están habilitadas. Primero se deben definir el negocio, el contacto y las condiciones reales.',
  },
];

export const faqsPendientes = [
  'Antes de ofrecer el sitio como negocio real: completar nombre, ciudad, dirección, carta, precios y contacto verificables.',
];
