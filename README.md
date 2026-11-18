# Sucova — Landing page

Página de Sucova (software y contabilidad): servicios contables, equipos de cómputo para negocios,
desarrollo y consultoría de software, y sus sistemas **Fadi** (facturación, en línea en https://sistemas.sucova.cloud)
y **Contim** (en desarrollo).

React + Vite + Tailwind CSS v4 + Framer Motion + react-icons.
Identidad: tinta `#17211D`, verde Fadi `#0D5C46`, ámbar `#E5B454`, papel `#F7F6F2`; tipografías Bricolage Grotesque,
Instrument Sans y JetBrains Mono. Los logotipos vienen de la carpeta de diseño (`src/assets`, `public/favicon.svg`).

Todo el texto está en `src/data/content.js` y `src/data/faq.js`. Solo información confirmada: no inventes cifras ni clientes.

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción en dist/
```

## Docker

```bash
docker build -t sucova-landing .
docker run -p 8080:80 sucova-landing   # http://localhost:8080
```

## SEO

Título, meta description, canonical, Open Graph, Twitter Card, JSON-LD (Organization con sus fundadores, WebSite, WebPage, SoftwareApplication de Fadi, FAQPage), `robots.txt`, `sitemap.xml` y `site.webmanifest`.
Compila con tu dominio real para que canonical, OG y sitemap apunten bien:

```bash
SITE_URL=https://www.sucova.cloud npm run build
docker build --build-arg SITE_URL=https://www.sucova.cloud -t sucova-landing .
```
