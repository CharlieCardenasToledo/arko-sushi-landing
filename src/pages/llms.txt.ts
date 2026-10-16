import type { APIRoute } from 'astro';
import { seo } from '../data/arko';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Falta site en astro.config.mjs');
  const body = `# Prototipo gastronómico inspirado en Ecuador\n\n> ${seo.description}\n\nSitio de demostración de diseño y desarrollo de Charlie Cárdenas Toledo. No representa un restaurante activo y no acepta reservas, pedidos ni pagos. Los nombres de platos, valores y textos son ejemplos que deben verificarse antes de cualquier uso comercial.\n\n## Créditos\n\n- Desarrollo: Charlie Cárdenas Toledo\n- Sitio personal: https://charliecardenastoledo.com/\n- LinkedIn: https://ec.linkedin.com/in/charlie-cardenas-toledo\n- Fotos y videos de referencia: proyecto original Arko Restaurant, Barcelona.\n- Página: ${site.href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
