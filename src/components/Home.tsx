import { useState } from "react";

type Lang = "es" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const isEs = lang === "es";

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex items-center justify-between px-5 py-4 lg:px-10 2xl:px-14">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-emerald-400 text-xs font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.5)]">
              FS
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Senior Software Engineer
              </p>
              <p className="text-sm font-semibold text-slate-50">
                Francisco Sempé
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-7 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 md:flex">
              <a href="#experience" className="hover:text-slate-50">
                {isEs ? "Experiencia" : "Experience"}
              </a>
              <a href="#services" className="hover:text-slate-50">
                {isEs ? "Servicios" : "Services"}
              </a>
              <a href="#skills" className="hover:text-slate-50">
                Skills
              </a>
              <a href="#process" className="hover:text-slate-50">
                {isEs ? "Proceso" : "Process"}
              </a>
              <a href="#about" className="hover:text-slate-50">
                {isEs ? "Sobre mí" : "About"}
              </a>
              <a href="#contact" className="hover:text-slate-50">
                {isEs ? "Contacto" : "Contact"}
              </a>
            </nav>
            <div className="flex items-center rounded-full border border-slate-700 bg-slate-900/70 text-[11px] font-medium text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.6)]">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-full transition ${
                  isEs ? "bg-sky-500 text-slate-950" : "hover:text-slate-100"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition ${
                  !isEs ? "bg-sky-500 text-slate-950" : "hover:text-slate-100"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto px-5 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16 2xl:px-14">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {isEs
                ? "Open to Senior Software Engineer roles en equipos orientados a producto"
                : "Open to Senior Software Engineer roles in product‑driven teams"}
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                {isEs
                  ? "Senior Software Engineer · AI + Scalable Architectures"
                  : "Senior Software Engineer · AI & Scalable Architectures"}
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
                {isEs
                  ? "Diseño y desarrollo sistemas full‑stack escalables con foco en producto"
                  : "Designing and building scalable full‑stack systems with a product focus"}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300">
                {isEs
                  ? "Soy Senior Software Engineer con más de 10 años de experiencia diseñando y desarrollando sistemas en producción. Trabajo end‑to‑end: desde el diseño técnico hasta la implementación, despliegue y soporte, integrando capacidades de IA en productos reales con foco en aportar valor concreto al negocio."
                  : "I’m a Senior Software Engineer with 10+ years of experience designing and developing production systems. I work end‑to‑end, from technical design to implementation, deployment and production support, integrating AI capabilities into real products with a focus on business impact."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.7)] transition hover:bg-sky-400"
              >
                {isEs ? "Agendemos una llamada" : "Schedule a call"}
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-slate-500 hover:bg-slate-800"
              >
                {isEs ? "Ver experiencia" : "View experience"}
              </a>
            </div>
            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur border border-slate-700/80">
                <p className="font-semibold text-slate-50">Ownership & Delivery</p>
                <p>
                  {isEs
                    ? "Mentalidad de ownership, foco en entrega y acompañamiento de features hasta producción."
                    : "Strong sense of ownership, delivery focus and support of features all the way to production."}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur border border-slate-700/80">
                <p className="font-semibold text-slate-50">
                  {isEs ? "Calidad & Escalabilidad" : "Quality & Scalability"}
                </p>
                <p>
                  {isEs
                    ? "Código limpio, mantenible y preparado para evolucionar en el tiempo."
                    : "Clean, maintainable code designed to evolve over time."}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur border border-slate-700/80">
                <p className="font-semibold text-slate-50">
                  {isEs ? "Trabajo end‑to‑end" : "End‑to‑end Ownership"}
                </p>
                <p>
                  {isEs
                    ? "Participación activa en decisiones de arquitectura y trabajo cercano con producto y stakeholders."
                    : "Active participation in architecture decisions and close collaboration with product and stakeholders."}
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-5 rounded-3xl bg-slate-900/70 p-6 shadow-[0_32px_96px_rgba(15,23,42,0.98)] backdrop-blur border border-slate-700/80">
            <div className="flex items-center gap-6">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-600 bg-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.7)]">
                <img
                  src="/foto-personal.png"
                  alt={isEs ? "Foto de Francisco Sempé" : "Photo of Francisco Sempé"}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="text-xs text-slate-300">
                <p className="text-sm font-semibold text-slate-50">
                  Francisco Sempé
                </p>
                <p>
                  {isEs
                    ? "Senior Software Engineer · AI + Scalable Architectures"
                    : "Senior Software Engineer · AI & Scalable Architectures"}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  {isEs
                    ? "Más de 10 años diseñando y desarrollando sistemas en producción."
                    : "10+ years designing and building production systems."}
                </p>
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Toolkit
            </p>
            <p className="text-sm text-slate-300">
              {isEs
                ? "Exploro y combino tecnologías para armar soluciones concretas, no solo demos:"
                : "I combine technologies to build real, production‑ready solutions, not just demos:"}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "Node.js / NestJS",
                "Python",
                "PHP (CakePHP)",
                "Java (Spring)",
                "PostgreSQL",
                "Relational DBs",
                "AWS (Lambda, ECS, S3, Lightsail)",
                "IA (LLMs, automatización, agentes)",
                "REST APIs & Webhooks",
                "n8n",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-100"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-slate-700 bg-slate-900/80 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-50">
                {isEs ? "En qué puedo ayudarte" : "How I can help"}
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-4">
                <li>
                  {isEs
                    ? "Definir y priorizar ideas de producto."
                    : "Define and prioritize product ideas."}
                </li>
                <li>
                  {isEs
                    ? "Diseñar flujos y prototipos navegables."
                    : "Design user flows and interactive prototypes."}
                </li>
                <li>
                  {isEs
                    ? "Construir MVPs web / mobile listos para salir a producción."
                    : "Build web/mobile MVPs ready for production."}
                </li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-16 space-y-6 lg:mt-24">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {isEs ? "Experiencia" : "Experience"}
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-50">
                {isEs
                  ? "Más de 10 años construyendo productos en producción"
                  : "10+ years building production‑grade products"}
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              {isEs
                ? "He trabajado como desarrollador y full‑stack engineer en compañías de producto y servicios, participando en la evolución de CRMs, portales inmobiliarios, plataformas de marketing y soluciones de I+D con IA."
                : "I’ve worked as a developer and full‑stack engineer in product and services companies, helping evolve CRMs, real estate portals, marketing platforms and AI‑driven R&D solutions."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              label={
                isEs ? "2023 – Presente · Argentina" : "2023 – Present · Argentina"
              }
              title="Full‑Stack Engineer – AI & Product Engineering"
              stack={isEs ? "Flock IT · I+D & Producto" : "Flock IT · R&D & Product"}
              description={
                isEs
                  ? "Formo parte del equipo de I+D diseñando y desarrollando soluciones orientadas a producto. Trabajo end‑to‑end en features full‑stack, integrando IA (LLMs, automatización, agentes) en plataformas reales y participando en decisiones de arquitectura y evolución técnica."
                  : "Part of the R&D team, designing and building product‑oriented solutions. I work end‑to‑end on full‑stack features, integrating AI (LLMs, automation, agents) into real platforms and taking part in architecture and technical evolution decisions."
              }
            />
            <ProjectCard
              label={isEs ? "2022 – 2023 · Mar del Plata" : "2022 – 2023 · Mar del Plata"}
              title="Software Engineer"
              stack={
                isEs
                  ? "LIFULL Connect · CRM y portal inmobiliario"
                  : "LIFULL Connect · Real Estate CRM & portal"
              }
              description={
                isEs
                  ? "Desarrollo y evolución de un CRM inmobiliario y portal de propiedades usado en múltiples mercados. Implementación de features en backend (PHP, Python) y frontend (React/Next.js), diseño y consumo de APIs REST y despliegues en AWS (Lambda, ECS, S3, Lightsail)."
                  : "Worked on a real estate CRM and property portal used across multiple markets. Implemented backend features (PHP, Python) and frontend work (React/Next.js), designed and consumed REST APIs and supported AWS deployments (Lambda, ECS, S3, Lightsail)."
              }
            />
            <ProjectCard
              label={isEs ? "2021 – 2022 · Argentina" : "2021 – 2022 · Argentina"}
              title="Fullstack Developer"
              stack={
                isEs ? "OLX Group · CRM inmobiliario" : "OLX Group · Real estate CRM"
              }
              description={
                isEs
                  ? "Desarrollo de funcionalidades en un CRM inmobiliario integrado con portales de publicación. Construcción y mantenimiento de servicios backend en PHP (CakePHP) y frontend en React, con foco en mejoras de performance y evolución del sistema."
                  : "Developed features for a real estate CRM integrated with listing portals. Built and maintained backend services in PHP (CakePHP) and frontend in React, focusing on performance improvements and system evolution."
              }
            />
            <ProjectCard
              label={isEs ? "2020 – 2021 · Mar del Plata" : "2020 – 2021 · Mar del Plata"}
              title="Fullstack Developer"
              stack={
                isEs
                  ? "Fidelity Marketing · Plataforma de marketing"
                  : "Fidelity Marketing · Marketing platform"
              }
              description={
                isEs
                  ? "Desarrollo y mantenimiento de una plataforma de marketing y gestión de campañas. Implementación de servicios backend en PHP y Java (Spring), lógica de negocio para workflows de campañas e integraciones con servicios externos."
                  : "Developed and maintained a marketing and campaign management platform. Implemented backend services in PHP and Java (Spring), built business logic for campaign workflows and handled integrations with external services."
              }
            />
            <ProjectCard
              label={isEs ? "2014 – 2020 · Mar del Plata" : "2014 – 2020 · Mar del Plata"}
              title="Software Developer"
              stack={
                isEs ? "Grupo MDQ · Sistemas corporativos" : "Grupo MDQ · Corporate systems"
              }
              description={
                isEs
                  ? "Desarrollo de sistemas corporativos con VB.NET / ASP.NET MVC y Oracle (Stored Procedures), además de Web Services y soporte de infraestructura en IIS."
                  : "Developed corporate systems using VB.NET / ASP.NET MVC and Oracle (Stored Procedures), plus Web Services and IIS infrastructure support."
              }
            />
            <div className="flex flex-col justify-between rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 p-5 text-sm text-slate-200">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {isEs ? "Experimentos" : "Experiments"}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {isEs ? "Nuevas ideas en exploración" : "New ideas in exploration"}
                </h3>
                <p className="mt-2">
                  {isEs
                    ? "Trabajo constantemente en pequeños prototipos para explorar nuevas formas de interacción, especialmente con IA y experiencias conversacionales."
                    : "I constantly build small prototypes to explore new interaction patterns, especially around AI and conversational experiences."}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-slate-700"
              >
                {isEs ? "Contame tu idea →" : "Tell me about your idea →"}
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-16 space-y-6 lg:mt-24">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {isEs ? "Cómo puedo sumar a tu equipo" : "How I can support your team"}
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-50">
                {isEs
                  ? "Ingeniería, arquitectura y delivery end‑to‑end"
                  : "Engineering, architecture and end‑to‑end delivery"}
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              {isEs
                ? "Me sumo como Senior Software Engineer con mentalidad de ownership, ayudando a construir y evolucionar productos en producción con foco en calidad y escalabilidad."
                : "I join as a Senior Software Engineer with a strong ownership mindset, helping build and evolve production systems with a focus on quality and scalability."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ServiceColumn
              title={
                isEs
                  ? "Software Engineering & Arquitectura"
                  : "Software Engineering & Architecture"
              }
              items={
                isEs
                  ? [
                      "Diseño e implementación de arquitecturas full‑stack escalables.",
                      "Construcción de APIs y servicios backend robustos.",
                      "Desarrollo de frontends en React / Next.js orientados a producto.",
                      "Participación en decisiones de arquitectura y evolución técnica.",
                    ]
                  : [
                      "Design and implementation of scalable full‑stack architectures.",
                      "Building robust backend services and APIs.",
                      "Developing product‑oriented frontends in React / Next.js.",
                      "Active role in architecture decisions and technical evolution.",
                    ]
              }
            />
            <ServiceColumn
              title={
                isEs
                  ? "Delivery, IA aplicada & Automatización"
                  : "Delivery, Applied AI & Automation"
              }
              items={
                isEs
                  ? [
                      "Integración de capacidades de IA (LLMs, automatización y agentes).",
                      "Implementación de flujos automatizados con herramientas como n8n.",
                      "Colaboración con producto y stakeholders para traducir requerimientos en soluciones técnicas.",
                      "Code reviews, buenas prácticas y soporte en producción.",
                    ]
                  : [
                      "Integrating AI capabilities (LLMs, automation and agents).",
                      "Implementing automated workflows with tools like n8n.",
                      "Collaborating with product and stakeholders to turn requirements into technical solutions.",
                      "Code reviews, best practices and production support.",
                    ]
              }
            />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 space-y-6 lg:mt-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Skills
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-50">
              {isEs ? "Donde mejor puedo aportar" : "Where I add the most value"}
            </h2>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {[
              "Next.js / React",
              "Node.js / NestJS",
              "Python",
              "PHP / CakePHP",
              "Java / Spring",
              "PostgreSQL",
              "AWS (Lambda · ECS · S3)",
              "REST APIs",
              "Webhooks",
              "System design",
              "AI · LLMs · agents",
              "n8n & automation",
              isEs ? "Arquitecturas escalables" : "Scalable architectures",
              isEs ? "Microservicios & servicios backend" : "Backend services & microservices",
              isEs ? "Code reviews" : "Code reviews",
              isEs ? "Mentoría técnica" : "Technical mentoring",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mt-16 space-y-6 lg:mt-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              {isEs ? "Proceso" : "Process"}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-50">
              {isEs ? "Cómo trabajo en cada etapa" : "How I work at each stage"}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {(isEs
              ? [
                  {
                    step: "1",
                    title: "Idea",
                    description:
                      "Aterrizamos el problema, el contexto y los objetivos. Sumamos ideas con técnicas de brainstorming y pensamiento lateral.",
                  },
                  {
                    step: "2",
                    title: "Diseño & Prototipo",
                    description:
                      "Defino flujos clave, pantallas y un prototipo navegable que nos permite validar rápido con usuarios o stakeholders.",
                  },
                  {
                    step: "3",
                    title: "Desarrollo",
                    description:
                      "Diseñamos una arquitectura pragmática, construimos el MVP y preparamos todo para escalar (testing, observabilidad, etc.).",
                  },
                  {
                    step: "4",
                    title: "Testing & Seguridad",
                    description:
                      "Pruebas de funcionalidad, performance y vulnerabilidades para asegurar un lanzamiento estable y seguro.",
                  },
                  {
                    step: "5",
                    title: "Delivery",
                    description:
                      "Acompaño el despliegue a producción, monitoreo inicial y pequeños ajustes post‑lanzamiento.",
                  },
                  {
                    step: "6",
                    title: "Pitch & Storytelling",
                    description:
                      "Armamos un pitch claro para equipo directivo, inversores o clientes, resaltando valor de negocio y hoja de ruta.",
                  },
                ]
              : [
                  {
                    step: "1",
                    title: "Idea",
                    description:
                      "We define the problem, context and goals, adding ideas through brainstorming and lateral thinking techniques.",
                  },
                  {
                    step: "2",
                    title: "Design & Prototype",
                    description:
                      "I define key flows, screens and a clickable prototype so we can validate quickly with users or stakeholders.",
                  },
                  {
                    step: "3",
                    title: "Development",
                    description:
                      "We design a pragmatic architecture, build the MVP and get everything ready to scale (testing, observability, etc.).",
                  },
                  {
                    step: "4",
                    title: "Testing & Security",
                    description:
                      "Functional, performance and security testing to ensure a stable, secure launch.",
                  },
                  {
                    step: "5",
                    title: "Delivery",
                    description:
                      "I support the production release, initial monitoring and small post‑launch adjustments.",
                  },
                  {
                    step: "6",
                    title: "Pitch & Storytelling",
                    description:
                      "We craft a clear pitch for leadership, investors or clients, highlighting business value and roadmap.",
                  },
                ]
            ).map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col justify-between rounded-3xl bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {stage.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 space-y-6 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {isEs ? "Sobre mí" : "About"}
              </p>
              <h2 className="text-2xl font-semibold text-slate-50">
                {isEs
                  ? "Senior Software Engineer con más de 10 años de experiencia"
                  : "Senior Software Engineer with 10+ years of experience"}
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                {isEs
                  ? "Soy Senior Software Engineer con más de 10 años de experiencia diseñando y desarrollando sistemas en producción, trabajando de forma end‑to‑end desde el diseño técnico hasta el despliegue y soporte."
                  : "I am a Senior Software Engineer with 10+ years of experience designing and developing production systems, working end‑to‑end from technical design to deployment and support."}
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                {isEs
                  ? "En los últimos años integré capacidades de IA (LLMs, automatización y agentes) en plataformas reales, siempre con foco en aportar valor concreto al producto y al negocio. Me caracteriza la mentalidad de ownership, el foco en calidad y escalabilidad, y la participación activa en decisiones de arquitectura."
                  : "In recent years I’ve integrated AI capabilities (LLMs, automation and agents) into real platforms, always focused on delivering concrete product and business value. I’m characterized by a strong ownership mindset, focus on quality and scalability, and active participation in architecture decisions."}
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-900/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.95)] border border-slate-700">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {isEs ? "Actualmente" : "Currently"}
              </p>
              <p className="text-sm text-slate-200">
                {isEs
                  ? "Interesado en roles Senior Software Engineer en equipos orientados a producto, especialmente en entornos donde pueda aportar solidez técnica y evolución arquitectónica."
                  : "Interested in Senior Software Engineer roles in product‑oriented teams, especially where I can contribute technical robustness and architectural evolution."}
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>
                  •{" "}
                  {isEs
                    ? "Open to Senior Software Engineer opportunities across LATAM."
                    : "Open to Senior Software Engineer opportunities across LATAM."}
                </li>
                <li>
                  •{" "}
                  {isEs
                    ? "Fuerte interés en productos que integren IA y automatización."
                    : "Strong interest in products that integrate AI and automation."}
                </li>
                <li>
                  •{" "}
                  {isEs
                    ? "Equipos con cultura de colaboración, delivery y mejora continua."
                    : "Teams with a culture of collaboration, delivery and continuous improvement."}
                </li>
              </ul>
              <p className="pt-2 text-xs text-slate-400">
                {isEs
                  ? "Si lo que estás construyendo necesita solidez técnica, foco en producto y alguien que pueda acompañar el ciclo completo de desarrollo, podemos charlar."
                  : "If what you’re building needs technical robustness, product focus and someone to support the full development cycle, let’s talk."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 lg:mt-24">
          <div className="grid gap-8 rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800 px-6 py-8 text-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.95)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:px-10 md:py-10 border border-slate-700/80">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {isEs ? "Contacto" : "Contact"}
              </p>
              <h2 className="text-2xl font-semibold">
                {isEs ? "¿Coordinamos una charla?" : "Shall we schedule a call?"}
              </h2>
              <p className="text-sm text-slate-200/80">
                {isEs
                  ? "Si estás buscando un Senior Software Engineer con experiencia en arquitecturas escalables, IA aplicada y delivery end‑to‑end, escribime y coordinamos una primera conversación."
                  : "If you’re looking for a Senior Software Engineer with experience in scalable architectures, applied AI and end‑to‑end delivery, reach out and we’ll schedule an intro call."}
              </p>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:fran.sempe@gmail.com"
                  className="mt-1 inline-flex text-sm font-medium text-slate-50 underline-offset-4 hover:underline"
                >
                  fran.sempe@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {isEs ? "Teléfono" : "Phone / WhatsApp"}
                </p>
                <a
                  href="https://wa.me/542235369926"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex text-sm font-medium text-slate-50 underline-offset-4 hover:underline"
                >
                  +54 223 536 9926 (WhatsApp)
                </a>
              </div>
              <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-slate-100">
                    {isEs ? "Basado en" : "Based in"}
                  </p>
                  <p>
                    {isEs
                      ? "Argentina · Trabajo con equipos remotos en LATAM y global."
                      : "Argentina · Working remotely with teams across LATAM and worldwide."}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">
                    {isEs ? "Redes" : "Links"}
                  </p>
                  <div className="mt-1 space-y-1">
                    <a
                      href="https://www.linkedin.com/in/francisco-sempe"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-slate-200 underline-offset-4 hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://fransempe.github.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-slate-200 underline-offset-4 hover:underline"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-slate-500">
            {isEs
              ? "Inspirado en el trabajo de I+D en "
              : "Inspired by the R&D work at "}
            <a
              href="https://www.flocklabs.ar/home"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              flocklabs.ar
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

type ServiceColumnProps = {
  title: string;
  items: string[];
};

function ServiceColumn({ title, items }: ServiceColumnProps) {
  return (
    <div className="rounded-3xl bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

type ProjectCardProps = {
  label: string;
  title: string;
  stack: string;
  description: string;
};

function ProjectCard({ label, title, stack, description }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          {label}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          {stack}
        </p>
        <p className="mt-3 text-sm text-slate-600">{description}</p>
      </div>
    </article>
  );
}

