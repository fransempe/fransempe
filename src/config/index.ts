import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Francisco Sempé — Senior Software Engineer",
  author: "Francisco Sempé",
  description:
    "Senior Software Engineer based in Argentina. I specialize in building scalable full‑stack architectures and integrating AI into real products, working end‑to‑end from technical design to production.",
  lang: "es",
  siteLogo: "/francisco-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/francisco-sempe" },
    { text: "Github", href: "https://github.com/fransempe" },
    { text: "Email", href: "mailto:fran.sempe@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://francisco-sempe.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Francisco Sempé",
    specialty: "Senior Software Engineer · AI + Scalable Architectures",
    summary:
      "Senior Software Engineer con más de 10 años de experiencia diseñando y desarrollando sistemas en producción, especializado en arquitecturas full‑stack escalables e integración de IA en productos reales.",
    email: "fran.sempe@gmail.com",
  },
  experience: [
    {
      company: "Flock IT",
      position: "Full-Stack Engineer – AI & Product Engineering",
      startDate: "Apr 2023",
      endDate: "Present",
      summary: [
        "Parte del equipo de I+D, diseñando y desarrollando soluciones orientadas a producto.",
        "Trabajo end‑to‑end en funcionalidades full‑stack utilizando Next.js, Node.js/NestJS y Python.",
        "Integración de capacidades de IA (LLMs, automatización, agentes inteligentes) en plataformas reales.",
        "Participación activa en decisiones de arquitectura y evolución técnica de los proyectos.",
      ],
    },
    {
      company: "LIFULL Connect",
      position: "Software Engineer",
      startDate: "Feb 2017",
      endDate: "Feb 2023",
      summary: [
        "Desarrollo y evolución de un CRM inmobiliario y portal de propiedades usado en múltiples mercados.",
        "Implementación de funcionalidades backend con PHP (CakePHP) y Python, y frontend con React / Next.js.",
        "Diseño y consumo de APIs REST e implementación en entornos AWS (Lambda, ECS, S3, Lightsail).",
      ],
    },
    {
      company: "OLX Group",
      position: "Fullstack Developer",
      startDate: "Aug 2021",
      endDate: "Feb 2022",
      summary: [
        "Desarrollo de funcionalidades en un CRM inmobiliario integrado con portales de publicación.",
        "Construcción y mantenimiento de servicios backend en PHP (CakePHP) y frontend en React.",
        "Mejoras de performance y evolución del sistema en entornos de producción.",
      ],
    },
    {
      company: "Fidelity Marketing",
      position: "Fullstack Developer",
      startDate: "Jul 2020",
      endDate: "Jul 2021",
      summary: [
        "Desarrollo y mantenimiento de una plataforma de marketing y gestión de campañas.",
        "Implementación de servicios backend usando PHP y Java (Spring), además de lógica de negocio para workflows de campañas.",
      ],
    },
    {
      company: "Grupo MDQ",
      position: "Software Developer",
      startDate: "Aug 2014",
      endDate: "Jul 2020",
      summary: [
        "Desarrollo de sistemas corporativos utilizando VB.NET / ASP.NET MVC y Oracle (Stored Procedures).",
        "Implementación y mantenimiento de Web Services y soporte de infraestructura en IIS.",
      ],
    },
  ],
  projects: [
    {
      name: "Full‑stack · Next.js / React",
      summary: "Desarrollo de aplicaciones full‑stack utilizando Next.js, React, Node.js/NestJS, Python y PostgreSQL, con despliegues en cloud (AWS) y CI/CD.",
      linkPreview: "/",
      linkSource: "https://github.com/fransempe",
      image: "/spotifu.png",
    },
    {
      name: "Automation & n8n Flows",
      summary: "Automatizaciones con n8n y servicios cloud para orquestar procesos de negocio.",
      linkPreview: "/",
      linkSource: "https://github.com/fransempe",
      image: "/shopify-clon.png",
    },
    {
      name: "AI Integrations",
      summary: "Integración de LLMs y agentes inteligentes en plataformas web y backoffice.",
      linkPreview: "/",
      linkSource: "https://github.com/fransempe",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Soy Senior Software Engineer con más de 10 años de experiencia diseñando y desarrollando sistemas en producción.
      Me especializo en la construcción de arquitecturas full‑stack escalables y en el trabajo end‑to‑end: desde el diseño técnico hasta la implementación, despliegue y soporte en producción.

      En los últimos años integré capacidades de IA (LLMs, automatización y agentes) en plataformas reales, siempre con foco en aportar valor concreto al producto y al negocio.
      Me caracteriza la mentalidad de ownership y entrega, el foco en código limpio y mantenible, y la participación activa en decisiones de arquitectura junto con producto y stakeholders.
    `,
    image: "/francisco-big.jpg",
  },
};

// #5755ff
