import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { faq } from "./src/data/faq.js";

// URL pública del sitio (canonical, Open Graph, sitemap). Defínela al compilar: SITE_URL=https://tudominio.com
const SITE_URL = (process.env.SITE_URL || "https://www.sucova.cloud").replace(/\/$/, "");

const jsonld = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Sucova", url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon-512.png`, image: `${SITE_URL}/og-image.png`,
      description: "Equipos de cómputo, asesoría contable y software a la medida para empresas.",
      knowsAbout: ["Punto de venta", "Facturación electrónica CFDI 4.0", "Contabilidad", "Inventarios", "Costeo", "Recursos humanos", "Software empresarial"] },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "Sucova", inLanguage: "es-MX", publisher: { "@id": `${SITE_URL}/#organization` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: `${SITE_URL}/`, name: "Sucova | Punto de venta, facturación CFDI 4.0 y contabilidad", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` }, inLanguage: "es-MX" },
    { "@type": "SoftwareApplication", "@id": `${SITE_URL}/#internsys`, name: "InternSys", applicationCategory: "BusinessApplication", operatingSystem: "Web",
      description: "Sistema empresarial todo en uno: punto de venta, administración, contabilidad, facturación CFDI 4.0, recursos humanos, inventarios y costeo.",
      publisher: { "@id": `${SITE_URL}/#organization` } },
    { "@type": "SoftwareApplication", "@id": `${SITE_URL}/#internpos`, name: "InternPoS", applicationCategory: "BusinessApplication", operatingSystem: "Web",
      description: "Punto de venta local para comercios que necesitan seguir vendiendo aunque se caiga el internet.",
      publisher: { "@id": `${SITE_URL}/#organization` } },
    { "@type": "FAQPage", "@id": `${SITE_URL}/#faq`, mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const seo = () => ({
  name: "sucova-seo",
  transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", SITE_URL).replace("__JSONLD__", JSON.stringify(jsonld)),
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10);
    this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` });
    this.emitFile({
      type: "asset", fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`,
    });
  },
});

export default defineConfig({ plugins: [react(), tailwindcss(), seo()] });
