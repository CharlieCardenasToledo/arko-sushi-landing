# Ecuador · prototipo gastronómico

Sitio de demostración de diseño y desarrollo de **Charlie Cárdenas Toledo**, situado conceptualmente en Ecuador. No representa un restaurante activo. Los nombres de platos, valores, horarios, ubicación y cualquier otro dato comercial que aparezca son ejemplos visuales; no se aceptan reservas, pedidos ni pagos.

**Demo publicada:** [charliecardenastoledo.github.io/arko-landing](https://charliecardenastoledo.github.io/arko-landing/)

## Desarrollo

- Astro 7, Tailwind CSS 4, TypeScript, GSAP y Lenis.
- `pnpm install --frozen-lockfile`: instala dependencias.
- `pnpm dev`: inicia el servidor local.
- `pnpm build`: genera el sitio estático en `dist/`.
- `pnpm preview`: sirve localmente el build.
- GitHub Actions publica `dist/` en GitHub Pages al actualizar `main`.

El sitio está configurado para publicarse bajo `/arko-landing/`; por eso las rutas de recursos y páginas internas deben respetar la base configurada en `astro.config.mjs`.

## Créditos y atribución

- Desarrollo: [Charlie Cárdenas Toledo](https://charliecardenastoledo.com/).
- LinkedIn: [Charlie Cárdenas Toledo](https://ec.linkedin.com/in/charlie-cardenas-toledo).
- Las fotografías y videos de referencia del prototipo pertenecen al proyecto original **Arko Restaurant**, Barcelona. Se conservan con atribución para mostrar el diseño y no representan un espacio de Ecuador.
- La estructura del proyecto parte del repositorio [midudev/mcp-higgsfield-landing](https://github.com/midudev/mcp-higgsfield-landing). Se conserva la historia Git de origen.

Antes de convertir el prototipo en un sitio comercial, hay que reemplazar los medios de referencia por material autorizado y completar la identidad, el menú, los precios, la ubicación, los contactos y las condiciones reales del negocio.
