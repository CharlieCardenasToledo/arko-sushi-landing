import { seo } from './arko';
import { ogImage } from './imagenes';

function absolute(site: URL, path: string) {
  return new URL(path.replace(/^\/+/, ''), site).href;
}

export function structuredData(site: URL) {
  const home = site.href;
  const websiteId = new URL('#website', home).href;
  const webpageId = new URL('#webpage', home).href;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: home,
        name: 'Cocina ecuatoriana · Proyecto de demostración',
        description: seo.description,
        inLanguage: 'es-EC',
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: home,
        name: seo.title,
        description: seo.description,
        inLanguage: 'es-EC',
        isPartOf: { '@id': websiteId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absolute(site, ogImage.src),
          width: 1200,
          height: 630,
          caption: ogImage.alt,
        },
      },
    ],
  };
}
