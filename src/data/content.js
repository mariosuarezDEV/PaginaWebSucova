import {
  FaCashRegister, FaBuildingColumns, FaCalculator, FaFileInvoiceDollar,
  FaUsers, FaBoxesStacked, FaCoins, FaLaptop, FaCode,
} from "react-icons/fa6";
import {
  SiDjango, SiPostgresql, SiRailway, SiDocker, SiBootstrap, SiHtmx, SiResend, SiNeon, SiPython,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export const rotating = [
  "Punto de venta", "Administración", "Contabilidad", "Facturación",
  "Recursos Humanos", "Inventarios", "Costeo",
];

export const services = [
  { icon: FaLaptop, title: "Equipos de cómputo", text: "Te equipamos con la tecnología que tu negocio necesita para trabajar.", tone: "from-indigo-500 to-blue-500" },
  { icon: FaCalculator, title: "Asesoría contable", text: "Tus números claros y en orden, con acompañamiento profesional.", tone: "from-emerald-500 to-teal-500" },
  { icon: FaCode, title: "Soluciones con software", text: "Convertimos los problemas de tu empresa en sistemas que funcionan.", tone: "from-amber-500 to-orange-500" },
];

export const modules = [
  { icon: FaCashRegister, title: "Punto de venta", text: "Cobra en segundos: arma el ticket, elige la forma de pago y calcula el cambio. Cada venta se refleja en tus cuentas al instante." },
  { icon: FaBuildingColumns, title: "Administración", text: "Controla gastos, ingresos y traspasos entre cuentas, con comisiones incluidas, para saber a dónde se va cada peso." },
  { icon: FaCalculator, title: "Contabilidad", text: "Tus cuentas con el saldo al día y los catálogos del SAT listos, para que tu contador tenga todo a la mano." },
  { icon: FaFileInvoiceDollar, title: "Facturación", text: "Emite facturas electrónicas (CFDI 4.0) timbradas, con su XML y PDF guardados, sin salir del sistema." },
  { icon: FaUsers, title: "Recursos Humanos", text: "Organiza a tu equipo: quién trabaja contigo y en qué puesto, con su información en un solo lugar." },
  { icon: FaBoxesStacked, title: "Inventarios", text: "Sabe qué tienes, qué se vendió y qué toca reponer, para no quedarte sin producto ni con de más." },
  { icon: FaCoins, title: "Costeo", text: "Calcula cuánto te cuesta cada insumo, qué ganancia ponerle y cuál es tu utilidad neta después de impuestos." },
];

export const tech = [
  { icon: SiDjango, color: "#092E20", cat: "Aplicación", name: "Django", text: "El corazón del sistema: seguro, rápido y con años de comprobada estabilidad." },
  { icon: SiPython, color: "#3776AB", cat: "Lenguaje", name: "Python", text: "Código claro y mantenible, base de toda la lógica de negocio." },
  { icon: SiPostgresql, color: "#4169E1", cat: "Base de datos", name: "PostgreSQL", text: "Tus datos guardados en una base de datos robusta." },
  { icon: SiNeon, color: "#00A67E", cat: "Base de datos en la nube", name: "Neon", text: "PostgreSQL en la nube, siempre disponible." },
  { icon: FaAws, color: "#FF9900", cat: "Archivos", name: "AWS S3", text: "Tus facturas (XML y PDF) y documentos, guardados de forma privada." },
  { icon: SiRailway, color: "#0B0D0E", cat: "Hospedaje", name: "Railway", text: "Donde vive el sistema en línea, listo para usarse desde cualquier lugar." },
  { icon: SiDocker, color: "#2496ED", cat: "Despliegue", name: "Docker", text: "Empaquetamos el sistema para que funcione igual en cualquier entorno." },
  { icon: SiResend, color: "#000000", cat: "Correo", name: "Resend", text: "Avisos por correo de compras, ventas y accesos, directo a tu bandeja." },
  { icon: SiBootstrap, color: "#7952B3", cat: "Interfaz", name: "Bootstrap", text: "Pantallas que se adaptan a tu computadora o a tu celular." },
  { icon: SiHtmx, color: "#3366CC", cat: "Interfaz", name: "htmx", text: "Pantallas ágiles que responden al instante, sin recargar." },
  { icon: FaFileInvoiceDollar, color: "#4f46e5", cat: "Facturación", name: "ContaDB · satcfdi", text: "Armamos el CFDI 4.0 con satcfdi y lo timbramos con ContaDB." },
];

export const steps = [
  { n: 1, title: "Modelamos", text: "Dibujamos los procesos de tu negocio con BPMN para entender cómo trabajas hoy." },
  { n: 2, title: "Adaptamos", text: "Ajustamos InternSys a la forma en que realmente trabajas, no al revés." },
  { n: 3, title: "Operas", text: "Empiezas a operar sin problemas, con tu negocio ya organizado." },
];

export const founders = [
  { title: "Director de Finanzas y Contabilidad", text: "Cuida que los números de tu negocio estén claros y en regla.", icon: FaCalculator },
  { title: "Director de Tecnología", text: "Diseña y mantiene el software y los equipos que hacen funcionar tu empresa.", icon: FaCode },
];

// Cifras reales derivadas del contenido de la página (no se inventan métricas).
export const stats = [
  { n: modules.length, label: "Especialidades en InternSys" },
  { n: 2, label: "Sistemas: InternPoS e InternSys" },
  { n: tech.length, label: "Tecnologías de confianza" },
  { n: steps.length, label: "Pasos para empezar a operar" },
];
