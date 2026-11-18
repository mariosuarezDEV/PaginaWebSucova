// Todo el texto de la página. Solo información confirmada por Sucova: no se inventan cifras ni clientes.
import {
  FaCalculator, FaLaptop, FaCode, FaLightbulb,
  FaCashRegister, FaBuildingColumns, FaFileInvoiceDollar, FaUsers, FaBoxesStacked, FaCoins,
  FaFileInvoice, FaMoneyBillTransfer as FaBank, FaIdCard,
} from "react-icons/fa6";

export const FADI_URL = "https://sistemas.sucova.cloud";
export const EMAIL = "soporte@servicios.sucova.cloud";

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#preguntas", label: "Preguntas" },
];

export const services = [
  {
    icon: FaCalculator, title: "Servicios contables",
    text: "Llevamos la contabilidad de tu negocio para que tus números estén claros y en orden.",
  },
  {
    icon: FaLaptop, title: "Equipos de cómputo para negocios",
    text: "Te equipamos con la tecnología que tu negocio necesita para trabajar.",
    items: ["Venta de equipos", "Instalación y configuración", "Mantenimiento y soporte"],
  },
  {
    icon: FaCode, title: "Desarrollo de software",
    text: "Convertimos los problemas de tu empresa en sistemas hechos a tu medida.",
  },
  {
    icon: FaLightbulb, title: "Consultoría de software",
    text: "Te orientamos para elegir, adaptar y aprovechar el software que tu negocio necesita.",
  },
];

// Fadi: datos tomados de su landing (sistemas.sucova.cloud).
export const fadi = {
  tagline: "Facturación electrónica",
  text: "El sistema en línea para empresas en México que quieren emitir sus facturas electrónicas, saber quién les debe, conciliar sus bancos y timbrar su nómina desde un solo lugar.",
  modules: [
    { icon: FaFileInvoice, title: "Facturación", text: "Facturas CFDI 4.0 con las reglas del SAT revisadas antes de timbrar. XML y PDF listos para entregar." },
    { icon: FaBank, title: "Tesorería", text: "Cada factura timbrada se vuelve una cuenta por cobrar. Importa tu estado de cuenta y concilia." },
    { icon: FaIdCard, title: "Nóminas", text: "Recibos de nómina timbrados con complemento Nómina 1.2, junto a tus facturas." },
  ],
  perks: ["CFDI 4.0", "Nómina 1.2", "Conciliación bancaria", "Soporte 24/7 con personas reales"],
};

// Contim: en desarrollo. Hará lo mismo que InternSys (el nombre anterior del proyecto).
export const contim = {
  text: "Nuestro próximo sistema. Contim reunirá en un solo lugar las herramientas para operar tu empresa, y cada parte hablará con las demás.",
  modules: [
    { icon: FaCashRegister, title: "Punto de venta", text: "Arma el ticket, elige la forma de pago y calcula el cambio." },
    { icon: FaBuildingColumns, title: "Administración", text: "Gastos, ingresos y traspasos entre cuentas." },
    { icon: FaCalculator, title: "Contabilidad", text: "Tus cuentas con el saldo al día y los catálogos del SAT." },
    { icon: FaFileInvoiceDollar, title: "Facturación", text: "Facturas electrónicas CFDI 4.0 con su XML y PDF." },
    { icon: FaUsers, title: "Recursos humanos", text: "Tu equipo y sus puestos, en un solo lugar." },
    { icon: FaBoxesStacked, title: "Inventarios", text: "Qué tienes, qué se vendió y qué toca reponer." },
    { icon: FaCoins, title: "Costeo", text: "Costo de cada insumo, margen y utilidad neta." },
  ],
};

export const steps = [
  { title: "Entendemos tu negocio", text: "Modelamos tus procesos con BPMN, el estándar para procesos de negocio, para ver cómo trabajas hoy." },
  { title: "Proponemos la solución", text: "Servicio contable, equipo, uno de nuestros sistemas o un desarrollo a tu medida: lo que de verdad necesites." },
  { title: "Empiezas a operar", text: "Lo ponemos a funcionar y empiezas a trabajar, con tu negocio ya organizado." },
];

export const founders = [
  {
    initials: "AC", name: "Angel Cova", role: "Socio fundador · Director de Finanzas y Contabilidad",
    text: "Cuida que los números de tu negocio estén claros y en regla.",
  },
  {
    initials: "LS", name: "Luis Suarez", role: "Socio fundador · Director de TI",
    text: "Diseña y mantiene el software y los equipos que hacen funcionar tu empresa.",
  },
];
