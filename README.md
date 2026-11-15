# Sucova — Landing page

React + Vite + Tailwind CSS v4 + Framer Motion + react-icons (logos de tecnologías).
Contenido tomado del index de InternPoS (`src/data/content.js`).

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción en dist/
```

Sin enlaces: la página es solo informativa.
Sin imágenes con derechos: la maqueta del POS es HTML/CSS y los logos son iconos de marcas tecnológicas.

## Docker

```bash
docker build -t sucova-landing .
docker run -p 8080:80 sucova-landing   # http://localhost:8080
```

## SEO

Título, meta description, canonical, Open Graph, Twitter Card, JSON-LD (Organization, WebSite, SoftwareApplication, FAQPage), `robots.txt`, `sitemap.xml` y `site.webmanifest`.
Compila con tu dominio real para que canonical, OG y sitemap apunten bien:

```bash
SITE_URL=https://tudominio.com npm run build
docker build --build-arg SITE_URL=https://tudominio.com -t sucova-landing .
```
