import { useEffect, useRef, useState } from 'react';

// ═════════════════════════════════════════════════════════════════════════════
// BRAND
// ═════════════════════════════════════════════════════════════════════════════
// Corporate blue palette derived from the ImpulsaTec logo.
const C = {
  blue: '#2E4B8F', // medium corporate blue (primary accent)
  blueBright: '#3D5FB0', // hover / brighter
  blueLight: '#5B82D6', // light accent for dark bg
  navy: '#14224A', // deep navy
  bg: '#0A0F1F', // base background
  bgDeep: '#060A14', // deeper background
};

const HLS_SRC = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

// ─────────────────────────────────────────────────────────────────────────────
// LOGO — recreated as SVG (the two ascending pillars forming a split "I")
// ─────────────────────────────────────────────────────────────────────────────
function Logo({ height = 80, showText = true }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 20 }}>
      <img
        src="/ImpulsaTec-light.png"
        alt="ImpulsaTec"
        style={{ height: height, width: 'auto', display: 'block' }}
      />
    </span>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// COPY (bilingual)
// ═════════════════════════════════════════════════════════════════════════════
const COPY = {
  es: {
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Por qué nosotros', href: '#porque' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Contacto', href: '#contacto' },
    ],
    cta: 'Contáctanos',
    eyebrow: 'Agencia de tecnología · Innovación con propósito',
    titleParts: ['Tecnología que ', 'impulsa', ' tu negocio.'],
    sub: 'Automatizamos procesos, integramos sistemas y aseguramos tu infraestructura con soluciones de IA y cloud de primer nivel.',
    primary: 'Ver servicios',
    secondary: 'Contáctanos',
    scroll: 'SCROLL',
    stats: [
      { value: 6, suffix: '', label: 'Áreas de\nespecialización', count: true },
      {
        value: 3,
        suffix: '',
        label: 'Nubes certificadas',
        sub: '(AZURE · AWS · GCP)',
        count: true,
      },
      {
        value: 100,
        suffix: '%',
        label: 'Proyectos\ndocumentados',
        count: true,
      },
      {
        value: 'IA',
        suffix: '',
        label: 'Integrada en cada\nproyecto',
        count: false,
      },
    ],
    servicesEyebrow: 'Nuestros servicios',
    servicesTitleParts: ['Seis áreas de\n', 'especialización.'],
    servicesSub:
      'Soluciones completas desde el código hasta la infraestructura, bajo un mismo equipo comprometido con tus resultados.',
    services: [
      {
        icon: 'code',
        title: 'Desarrollo a medida',
        body: 'Aplicaciones web y móviles diseñadas para tu negocio. Arquitecturas escalables, código mantenible y entrega con documentación rigurosa.',
        tags: 'WEB · MÓVIL · BACKEND',
      },
      {
        icon: 'spark',
        title: 'Automatización & Agentes de IA',
        body: 'Flujos de trabajo inteligentes que operan solos. Agentes de IA que reducen tareas repetitivas, errores humanos y tiempo de respuesta.',
        tags: 'IA · AGENTES · FLUJOS',
      },
      {
        icon: 'link',
        title: 'Integración de sistemas',
        body: 'Conectamos tus herramientas, plataformas y bases de datos. APIs robustas y middleware que logran que tus sistemas hablen sin fricciones.',
        tags: 'APIS · MIDDLEWARE · ETL',
      },
      {
        icon: 'shield',
        title: 'Infraestructura & Seguridad',
        body: 'Cloud en Azure, AWS y GCP. Firewalls, WAF, planes de disaster recovery y arquitecturas de continuidad para que tu negocio no se detenga.',
        tags: 'CLOUD · FIREWALLS · DRP',
      },
      {
        icon: 'chart',
        title: 'Consultoría Tecnológica',
        body: 'Estrategia digital clara. Evaluamos tu stack actual, identificamos cuellos de botella y diseñamos el camino hacia la modernización.',
        tags: 'ESTRATEGIA · AUDITORÍA · ROADMAP',
      },
      {
        icon: 'bars',
        title: 'Marketing Digital & SEO',
        body: 'Presencia online que convierte. Sitios web optimizados, posicionamiento en buscadores y campañas que generan leads reales.',
        tags: 'SEO · WEB · CAMPAÑAS',
      },
    ],
    whyEyebrow: 'Por qué ImpulsaTec',
    whyTitleParts: ['Cuatro razones que\n', 'nos distinguen.'],
    why: [
      {
        n: '01',
        title: 'Experiencia real',
        body: 'No somos una agencia de teorías. Entregamos proyectos vivos, en producción, con métricas que demuestran el impacto de cada decisión técnica.',
      },
      {
        n: '02',
        title: 'Seguridad por diseño',
        body: 'La seguridad no es un addon. La integramos desde la arquitectura: firewalls, WAF, cifrado y control de acceso desde el primer día.',
      },
      {
        n: '03',
        title: 'Documentación rigurosa',
        body: 'Todo lo que construimos queda documentado. Runbooks, diagramas de arquitectura y manuales de operación que empoderan a tu equipo.',
      },
      {
        n: '04',
        title: 'IA en cada proyecto',
        body: 'Implementamos agentes y modelos de lenguaje donde generan valor real. Sin hype, con resultados medibles y tiempos de respuesta menores.',
      },
    ],
    aboutEyebrow: 'Quiénes somos',
    aboutTitleParts: ['Propósito y\n', 'dirección.'],
    about: [
      {
        icon: 'target',
        title: 'Misión',
        body: 'Transformar negocios con soluciones tecnológicas seguras, automatizadas e integradas que generan impacto medible y valor sostenible.',
      },
      {
        icon: 'shield',
        title: 'Visión',
        body: 'Ser la agencia de tecnología de referencia que combina solidez empresarial e innovación en IA para la transformación digital real.',
      },
      {
        icon: 'chart',
        title: 'Objetivos',
        body: 'Reducir tiempos de caída, automatizar procesos clave e implementar agentes de IA en la mayoría de nuestros proyectos.',
      },
    ],
    stackEyebrow: 'Stack tecnológico',
    stackTitleParts: ['Las herramientas que\n', 'nos respaldan.'],
    contactEyebrow: 'Contacto',
    contactTitleParts: ['Hablemos de\n', 'tu proyecto.'],
    contactSub:
      'Cuéntanos qué necesitas. Analizamos tu caso sin coste y te damos una propuesta clara, sin compromisos ni tecnicismos innecesarios.',
    contactEmailLabel: 'EMAIL',
    contactEmail: 'contacto@impulsatec.com',
    contactResponseLabel: 'TIEMPO DE RESPUESTA',
    contactResponse: 'Menos de 24 horas',
    form: {
      name: 'Nombre',
      namePh: 'Tu nombre',
      company: 'Empresa',
      companyPh: 'Nombre de tu empresa',
      email: 'Email',
      emailPh: 'tu@empresa.com',
      service: 'Servicio de interés',
      servicePh: 'Selecciona un servicio...',
      message: 'Mensaje',
      messagePh:
        'Cuéntanos tu proyecto, desafío o idea. Cuanto más detalle, mejor.',
      submit: 'Enviar mensaje',
      success: 'Mensaje enviado. Te respondemos en menos de 24h.',
    },
    footer: {
      tagline: 'Tecnología que impulsa.',
      sectionsLabel: 'SECCIONES',
      sections: [
        { label: 'Servicios', href: '#servicios' },
        { label: 'Por qué nosotros', href: '#porque' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Stack tecnológico', href: '#stack' },
        { label: 'Contacto', href: '#contacto' },
      ],
      servicesLabel: 'SERVICIOS',
      servicesLinks: [
        'Desarrollo a medida',
        'Agentes de IA',
        'Integración de sistemas',
        'Infraestructura cloud',
        'Marketing Digital & SEO',
      ],
      copyright: '© 2026 ImpulsaTec. Todos los derechos reservados.',
    },
  },
  en: {
    nav: [
      { label: 'Services', href: '#servicios' },
      { label: 'Why us', href: '#porque' },
      { label: 'About', href: '#nosotros' },
      { label: 'Contact', href: '#contacto' },
    ],
    cta: 'Contact us',
    eyebrow: 'Technology agency · Innovation with purpose',
    titleParts: ['Technology that ', 'drives', ' your business.'],
    sub: 'We automate processes, integrate systems and secure your infrastructure with top-tier AI and cloud solutions.',
    primary: 'See services',
    secondary: 'Contact us',
    scroll: 'SCROLL',
    stats: [
      { value: 6, suffix: '', label: 'Areas of\nspecialization', count: true },
      {
        value: 3,
        suffix: '',
        label: 'Certified clouds',
        sub: '(AZURE · AWS · GCP)',
        count: true,
      },
      { value: 100, suffix: '%', label: 'Projects\ndocumented', count: true },
      {
        value: 'AI',
        suffix: '',
        label: 'Integrated in every\nproject',
        count: false,
      },
    ],
    servicesEyebrow: 'Our services',
    servicesTitleParts: ['Six areas of\n', 'specialization.'],
    servicesSub:
      'End-to-end solutions from code to infrastructure, delivered by one team committed to your results.',
    services: [
      {
        icon: 'code',
        title: 'Custom development',
        body: 'Web and mobile applications designed for your business. Scalable architectures, maintainable code and rigorous documentation.',
        tags: 'WEB · MOBILE · BACKEND',
      },
      {
        icon: 'spark',
        title: 'Automation & AI Agents',
        body: 'Intelligent workflows that operate on their own. AI agents that reduce repetitive tasks, human errors and response times.',
        tags: 'AI · AGENTS · FLOWS',
      },
      {
        icon: 'link',
        title: 'Systems integration',
        body: 'We connect your tools, platforms and databases. Robust APIs and middleware that get your systems talking without friction.',
        tags: 'APIS · MIDDLEWARE · ETL',
      },
      {
        icon: 'shield',
        title: 'Infrastructure & Security',
        body: 'Cloud on Azure, AWS and GCP. Firewalls, WAF, disaster recovery plans and continuity architectures so your business never stops.',
        tags: 'CLOUD · FIREWALLS · DRP',
      },
      {
        icon: 'chart',
        title: 'Tech consulting',
        body: 'Clear digital strategy. We assess your stack, identify bottlenecks and design the path to technological modernization.',
        tags: 'STRATEGY · AUDIT · ROADMAP',
      },
      {
        icon: 'bars',
        title: 'Digital Marketing & SEO',
        body: 'Online presence that converts. Optimized websites, search positioning and campaigns that generate real leads.',
        tags: 'SEO · WEB · CAMPAIGNS',
      },
    ],
    whyEyebrow: 'Why ImpulsaTec',
    whyTitleParts: ['Four reasons that\n', 'set us apart.'],
    why: [
      {
        n: '01',
        title: 'Real experience',
        body: "We're not a theory agency. We deliver live projects in production, with metrics that prove the impact of every technical decision.",
      },
      {
        n: '02',
        title: 'Security by design',
        body: "Security isn't an add-on. We build it into the architecture: firewalls, WAF, encryption and access control from day one.",
      },
      {
        n: '03',
        title: 'Rigorous documentation',
        body: 'Everything we build is documented. Runbooks, architecture diagrams and operations manuals that empower your internal team.',
      },
      {
        n: '04',
        title: 'AI in every project',
        body: 'We deploy agents and language models where they generate real value. No hype, just measurable results and shorter response times.',
      },
    ],
    aboutEyebrow: 'Who we are',
    aboutTitleParts: ['Purpose and\n', 'direction.'],
    about: [
      {
        icon: 'target',
        title: 'Mission',
        body: 'Transform businesses with secure, automated and integrated technology solutions that generate measurable impact and sustainable value.',
      },
      {
        icon: 'shield',
        title: 'Vision',
        body: 'Be the reference technology agency that combines business solidity with AI innovation for real digital transformation.',
      },
      {
        icon: 'chart',
        title: 'Goals',
        body: 'Reduce downtime, automate key processes and deploy AI agents across the majority of our projects.',
      },
    ],
    stackEyebrow: 'Tech stack',
    stackTitleParts: ['The tools that\n', 'back us up.'],
    contactEyebrow: 'Contact',
    contactTitleParts: ["Let's talk about\n", 'your project.'],
    contactSub:
      "Tell us what you need. We'll review your case at no cost and give you a clear proposal — no commitments, no unnecessary jargon.",
    contactEmailLabel: 'EMAIL',
    contactEmail: 'hola@impulsatec.com',
    contactResponseLabel: 'RESPONSE TIME',
    contactResponse: 'Under 24 hours',
    form: {
      name: 'Name',
      namePh: 'Your name',
      company: 'Company',
      companyPh: 'Your company name',
      email: 'Email',
      emailPh: 'you@company.com',
      service: 'Service of interest',
      servicePh: 'Select a service...',
      message: 'Message',
      messagePh:
        'Tell us about your project, challenge or idea. The more detail, the better.',
      submit: 'Send message',
      success: "Message sent. We'll reply within 24h.",
    },
    footer: {
      tagline: 'Technology that drives.',
      sectionsLabel: 'SECTIONS',
      sections: [
        { label: 'Services', href: '#servicios' },
        { label: 'Why us', href: '#porque' },
        { label: 'About', href: '#nosotros' },
        { label: 'Tech stack', href: '#stack' },
        { label: 'Contact', href: '#contacto' },
      ],
      servicesLabel: 'SERVICES',
      servicesLinks: [
        'Custom development',
        'AI Agents',
        'Systems integration',
        'Cloud infrastructure',
        'Digital Marketing & SEO',
      ],
      copyright: '© 2026 ImpulsaTec. All rights reserved.',
    },
  },
};

// ═════════════════════════════════════════════════════════════════════════════
// TECH STACK — inline SVG logos (Simple Icons paths, brand colors)
// ═════════════════════════════════════════════════════════════════════════════
const TECH = [
  {
    name: 'React',
    color: '#61DAFB',
    path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.182-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.395zm7.26 0c.695.112 1.365.244 2.006.393-.18.632-.405 1.282-.66 1.933a25.15 25.15 0 0 0-.634-1.158 27.789 27.789 0 0 0-.715-1.168zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.97 23.97 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.954.645 1.957 1.1 2.98a23.748 23.748 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.4a25.819 25.819 0 0 0 .71-1.158c.22-.39.43-.788.63-1.19zm-9.945.02c.2.392.41.783.64 1.175.23.392.465.778.705 1.157-.695-.112-1.365-.244-2.006-.393.18-.632.41-1.282.66-1.94zm8.515 1.16c.345.522.717 1.03 1.094 1.514a23.235 23.235 0 0 1-3.498 0c.376-.484.748-.99 1.094-1.514a25.825 25.825 0 0 0 1.31 0z',
  },
  {
    name: 'Next.js',
    color: '#FFFFFF',
    path: 'M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.038-.14.045-.495.045H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z',
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
  },
  {
    name: 'Node.js',
    color: '#5FA04E',
    path: 'M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.276.276 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.273.273 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15c0 .093.054.183.139.225l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.605V6.921c0-.659.353-1.275.922-1.603L11.072.235a1.937 1.937 0 0 1 1.853 0l8.794 5.083c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.605l-8.794 5.078c-.28.163-.598.247-.927.247zm2.715-6.99c-3.85 0-4.656-1.766-4.656-3.248 0-.142.114-.253.255-.253h1.137a.255.255 0 0 1 .254.214c.171 1.156.682 1.74 3.01 1.74 1.852 0 2.641-.418 2.641-1.402 0-.566-.224-.987-3.105-1.27-2.408-.238-3.897-.769-3.897-2.692 0-1.776 1.497-2.833 4.006-2.833 2.819 0 4.215.978 4.392 3.077a.273.273 0 0 1-.068.196.272.272 0 0 1-.187.082h-1.142a.253.253 0 0 1-.247-.198c-.275-1.214-.94-1.602-2.751-1.602-2.029 0-2.266.708-2.266 1.237 0 .642.281.83 3.013 1.192 2.703.357 3.987.86 3.987 2.757-.001 1.919-1.6 3.02-4.388 3.02z',
  },
  {
    name: 'Python',
    color: '#3776AB',
    path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z',
  },
  {
    name: 'PostgreSQL',
    color: '#4169E1',
    path: 'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.234-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8551.2851-1.1161.4456-2.1532.4636-2.9993.0182-.9304-.1494-1.6125-.4974-2.0273C21.6291.823 19.86.1131 17.7184.0028c-1.0837-.062-2.0529.0834-2.6535.193a8.273 8.273 0 0 0-.2473-.0444 8.602 8.602 0 0 0-1.5575-.1352c-1.071 0-1.9622.245-2.6488.7333-.4338-.1488-1.4429-.4453-2.5085-.5025-1.6566-.0855-3.0046.3144-4.0008 1.2007-1.1748-.0273-2.2226.295-2.8907.9056-.4193.3835-.6248.8485-.5728 1.2997.0017.024.0035.0473.0058.0703.0254.4304.4022.8197.9472 1.0014 1.1217.4124 4.4978 1.6286 7.8757 2.836-.0028 1.7484.041 3.4525.1255 5.0853.0584 1.1378.149 2.2535.275 3.3413.1672 1.4499.4154 2.8025.7458 4.0436.0623.2342.1284.4664.1981.6961-.3636.7997-.5915 1.5234-.6738 2.1626-.1393 1.0823.0867 2.1014.7382 3.1023.6512 1.0009 1.7333 1.7724 3.1296 2.2253.7035.2278 1.5045.4 2.3848.5128.3382.0432.679.0746 1.0224.0944.4444.0258.8961.0388 1.3445.0388 1.0444 0 2.0723-.0742 3.0723-.2207 3.4858-.5108 6.3528-2.0392 7.6878-4.0954.5645-.8703.8645-1.7847.8645-2.6453 0-.4348-.0658-.8607-.196-1.2706zM21.3625 16.32c-.1326.1502-.3273.272-.5783.3618-.4863.174-1.0814.213-1.6796.1098-.7163-.1235-1.0814-.4863-1.3556-.8514a3.5638 3.5638 0 0 1-.196-.3273c.196.0392.4079.0588.6313.0588.1326 0 .2705-.0072.4079-.0196.1546-.0144.3127-.0392.4654-.0784.392-.0998.7163-.2705.9398-.4863.196-.1894.2705-.392.2705-.5783 0-.1546-.0588-.2705-.196-.3273-.0588-.0248-.1326-.0392-.213-.0392-.1326 0-.272.0392-.392.0998-.196.0998-.392.1894-.5783.2705a3.0438 3.0438 0 0 1-.5587.196c-.1894.0392-.392.0588-.5783.0588-.196 0-.392-.0196-.5587-.0784-.1546-.0588-.2705-.1546-.3273-.2705-.0392-.0784-.0392-.1546-.0196-.213.0196-.0588.0588-.1098.1098-.1546.1894-.1546.4863-.272.8514-.392.213-.0588.4283-.1098.6313-.1546.213-.0392.4079-.0588.5783-.0588h.0392c.392 0 .7359.0784 1.0228.213.213.0998.4079.2334.5587.392.0392.0392.0784.0784.1098.1235.0392.0588.0784.1235.1098.1894.0784.1546.1235.3273.1235.5008-.0072.213-.0784.4079-.213.5587z',
  },
  {
    name: 'OpenAI',
    color: '#FFFFFF',
    path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9 6.0651 6.0651 0 0 0-4.5829-2.0561 6.0511 6.0511 0 0 0-5.7706 4.1942 5.9847 5.9847 0 0 0-3.9977 2.9 6.0557 6.0557 0 0 0 .7427 7.0966 5.9809 5.9809 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7706-4.2059 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  },
  {
    name: 'Anthropic',
    color: '#D97757',
    path: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2426 2.2914-5.9472 2.2914 5.9472Z',
  },
  {
    name: 'AWS',
    color: '#FF9900',
    path: 'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.24-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36.392-.103.806-.151 1.245-.151.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.272.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.224-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zm1.094-1.245c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.694-2.994z',
  },
  {
    name: 'Azure',
    color: '#0078D4',
    path: 'M12.5535 1.6986L4.5896 22.301h7.9639L24 22.301zm-4.4307 18.7C7.456 19.4536 5.6075 16.5 5.4596 16.318L0 7.7777 1.9645 1.6986h7.165l4.0497 13.5286-5.0564 5.187z',
  },
  {
    name: 'Docker',
    color: '#2496ED',
    path: 'M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z',
  },
  {
    name: 'FastAPI',
    color: '#009688',
    path: 'M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z',
  },
  {
    name: 'LangChain',
    color: '#FFFFFF',
    path: 'M13.483 4.408c-3.084 0-5.594 2.509-5.594 5.593v1.27l1.5.001v-1.27a4.105 4.105 0 0 1 4.094-4.094h2.7a4.105 4.105 0 0 1 4.094 4.094 4.105 4.105 0 0 1-4.094 4.094h-.622v1.5h.622c3.084 0 5.594-2.51 5.594-5.594 0-3.084-2.51-5.593-5.594-5.593h-2.7zM7.817 9.404c-3.084 0-5.594 2.51-5.594 5.594 0 3.084 2.51 5.594 5.594 5.594h2.7c3.084 0 5.594-2.51 5.594-5.594v-1.27h-1.5v1.27a4.105 4.105 0 0 1-4.094 4.094h-2.7a4.105 4.105 0 0 1-4.094-4.094 4.105 4.105 0 0 1 4.094-4.094h.622v-1.5h-.622z',
  },
  {
    name: 'Redis',
    color: '#FF4438',
    path: 'M23.408 16.756c-1.296.676-8.014 3.44-9.444 4.184-1.43.744-2.227.737-3.358.197-1.131-.541-8.284-3.43-9.572-4.046-.644-.308-.982-.567-.982-.812v-2.452s9.297-2.024 10.798-2.563c1.501-.538 2.022-.557 3.3-.089 1.279.468 8.927 1.849 10.19 2.31l-.001 2.42c.001.243-.29.511-.931.851zm-9.444.515c-1.43.744-2.227.737-3.358.197-1.131-.541-8.284-3.43-9.572-4.046-1.288-.616-1.314-1.041-.05-1.537 1.265-.495 8.375-3.287 9.876-3.825 1.501-.538 2.022-.558 3.3-.09 1.279.468 7.945 3.129 9.208 3.591 1.262.462 1.32.841.024 1.517-1.296.676-8.014 3.44-9.444 4.184zm9.444-4.582c-1.296.677-8.014 3.44-9.444 4.184-1.43.744-2.227.737-3.358.197-1.131-.541-8.284-3.43-9.572-4.046-.644-.308-.982-.567-.982-.812v-2.452s9.297-2.024 10.798-2.562c1.501-.539 2.022-.558 3.3-.09 1.279.468 8.927 1.849 10.19 2.311v2.42c.001.242-.29.511-.931.85zM13.964 8.84c-1.43.744-2.227.737-3.358.196-1.131-.541-8.284-3.428-9.572-4.046-1.288-.617-1.314-1.041-.05-1.537 1.265-.495 8.375-3.286 9.876-3.825 1.501-.538 2.022-.557 3.3-.089 1.279.468 7.945 3.128 9.208 3.59 1.262.463 1.32.842.024 1.518-1.296.677-8.014 3.44-9.444 4.184l.016.009z',
  },
  {
    name: 'Tailwind',
    color: '#06B6D4',
    path: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
  },
  {
    name: 'Nginx',
    color: '#009639',
    path: 'M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .976-.797 1.778-1.78 1.778-.563 0-1.052-.246-1.4-.644L7.5 8.69v7.9c0 .976-.79 1.778-1.777 1.778A1.781 1.781 0 014 16.59V7.41c0-.976.79-1.778 1.777-1.778.563 0 1.05.246 1.4.644l7.32 9.034v-7.9c0-.976.8-1.778 1.78-1.778s1.778.802 1.778 1.778v9.18z',
  },
  {
    name: 'Flutter',
    color: '#02569B',
    path: 'M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z',
  },
  {
    name: 'GitHub',
    color: '#FFFFFF',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const ICONS = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  spark: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  chart: (
    <>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </>
  ),
  bars: (
    <>
      <line x1="6" y1="20" x2="6" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
const STYLES = `
.impt-root {
  --blue: ${C.blue}; --blue-bright: ${C.blueBright}; --blue-light: ${C.blueLight};
  --navy: ${C.navy}; --bg: ${C.bg}; --bg-deep: ${C.bgDeep};
  position: relative; width: 100%; overflow-x: hidden;
  background: var(--bg); color: #fff;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box;
}
.impt-root *, .impt-root *::before, .impt-root *::after { box-sizing: border-box; }
.impt-root a { color: inherit; text-decoration: none; }
.impt-root button { font-family: inherit; }

/* HERO */
.impt-hero-wrap { position: relative; width: 100%; min-height: 100vh; min-height: 100dvh; overflow: hidden; }
.impt-hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; object-fit: cover; }
.impt-fallback-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(120% 80% at 70% 25%, rgba(46,75,143,0.28) 0%, rgba(10,15,31,0.95) 60%),
    linear-gradient(180deg, ${C.bg} 0%, ${C.bgDeep} 100%);
}
.impt-hero-glow {
  position: absolute; top: 38%; left: 50%; transform: translate(-50%,-50%);
  width: 700px; height: 700px; max-width: 90vw; border-radius: 50%;
  background: radial-gradient(circle, rgba(46,75,143,0.30) 0%, transparent 65%);
  animation: impt-glow 6s ease-in-out infinite; pointer-events: none;
}
@keyframes impt-glow { 0%,100%{opacity:.65; transform:translate(-50%,-50%) scale(1);} 50%{opacity:1; transform:translate(-50%,-50%) scale(1.12);} }
.impt-corner { position: absolute; width: 22px; height: 22px; border: 1.5px solid rgba(91,130,214,0.5); pointer-events: none; z-index: 8; }
.impt-corner.tl { top: 88px; left: 24px; border-right: none; border-bottom: none; }
.impt-corner.tr { top: 88px; right: 24px; border-left: none; border-bottom: none; }
.impt-corner.bl { bottom: 24px; left: 24px; border-right: none; border-top: none; }
.impt-corner.br { bottom: 24px; right: 24px; border-left: none; border-top: none; }
@media (max-width: 640px){ .impt-corner{display:none;} }

/* HEADER */
.impt-header {
  position: fixed; left: 0; right: 0; top: 0; z-index: 50;
  background-color: rgba(10,15,31,0.7); border-bottom: 1px solid transparent;
  transition: background-color 300ms ease, border-color 300ms ease;
}
.impt-header.is-scrolled { background-color: rgba(10,15,31,0.92); border-bottom-color: rgba(255,255,255,0.06); }
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
  .impt-header { background-color: rgba(10,15,31,0.45); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); }
  .impt-header.is-scrolled { background-color: rgba(10,15,31,0.72); -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); }
}
.impt-header-inner { margin: 0 auto; max-width: 1280px; display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; gap: 16px; }
@media (min-width: 768px){ .impt-header-inner{ padding: 16px 40px; } }
.impt-nav { display: none; align-items: center; gap: 28px; }
@media (min-width: 900px){ .impt-nav{ display: flex; } }
.impt-nav-link { font-size: 14px; color: rgba(255,255,255,0.65); transition: color 200ms ease; }
.impt-nav-link:hover { color: #fff; }
.impt-right { display: flex; align-items: center; gap: 12px; }
.impt-lang { display: none; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); background: transparent; border: none; cursor: pointer; padding: 4px 8px; transition: color 200ms ease; }
@media (min-width: 640px){ .impt-lang{ display: inline-block; } }
.impt-lang:hover { color: #fff; }
.impt-cta-pill {
  display: inline-flex; align-items: center; padding: 9px 20px; font-size: 14px; font-weight: 600;
  color: #fff; border-radius: 9999px; border: 1px solid transparent;
  background: linear-gradient(135deg, var(--blue) 0%, var(--blue-bright) 100%);
  transition: box-shadow 200ms ease, transform 200ms ease;
}
.impt-cta-pill:hover { box-shadow: 0 0 24px rgba(46,75,143,0.55); transform: translateY(-1px); }

/* HERO CONTENT */
.impt-hero { position: relative; z-index: 10; min-height: 100vh; min-height: 100dvh; display: flex; align-items: center; justify-content: center; padding: 120px 24px 120px; text-align: center; }
.impt-hero-inner { width: 100%; max-width: 980px; }
.impt-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em; color: var(--blue-light); margin-bottom: 28px; opacity: 0; animation: impt-fade-up 700ms ease 100ms forwards; }
.impt-eyebrow-dot { display: inline-block; width: 6px; height: 6px; border-radius: 9999px; background: var(--blue-light); animation: impt-pulse 2s ease-in-out infinite; }
.impt-title { margin: 0; font-size: clamp(40px, 7vw, 86px); font-weight: 800; line-height: 1.02; letter-spacing: -0.025em; color: #fff;}
.impt-title .word { display: inline-block; opacity: 0; transform: translateY(20px); animation: impt-fade-up 600ms cubic-bezier(0.2,0.7,0.3,1) forwards; }
.impt-title-accent {
  position: relative; color: var(--blue-light);
}
.impt-title-accent.glitch::before, .impt-title-accent.glitch::after {
  content: attr(data-text); position: absolute; left: 0; top: 0; width: 100%; overflow: hidden;
}
.impt-title-accent.glitch::before { color: #ff3b5c; animation: impt-glitch-1 0.3s steps(2) 1; clip-path: inset(0 0 55% 0); }
.impt-title-accent.glitch::after { color: #22d3ee; animation: impt-glitch-2 0.3s steps(2) 1; clip-path: inset(55% 0 0 0); }
@keyframes impt-glitch-1 { 0%{transform:translateX(0);} 50%{transform:translateX(-3px);} 100%{transform:translateX(0);} }
@keyframes impt-glitch-2 { 0%{transform:translateX(0);} 50%{transform:translateX(3px);} 100%{transform:translateX(0);} }
.impt-sub { margin: 28px auto 0; max-width: 640px; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.66); opacity: 0; animation: impt-fade-up 700ms ease 900ms forwards; }
@media (min-width: 768px){ .impt-sub{ font-size: 17px; } }
.impt-cta-row { margin-top: 44px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; opacity: 0; animation: impt-fade-up 700ms ease 1100ms forwards; }
.impt-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-size: 14px; font-weight: 600; border-radius: 9999px; cursor: pointer; transition: all 200ms ease; }
.impt-btn-primary { background: linear-gradient(135deg, var(--blue) 0%, var(--blue-bright) 100%); color: #fff; border: 1px solid transparent; }
.impt-btn-primary:hover { box-shadow: 0 0 30px rgba(46,75,143,0.5); transform: translateY(-2px); }
.impt-btn-secondary { color: #fff; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.04); }
.impt-btn-secondary:hover { border-color: rgba(91,130,214,0.6); background: rgba(91,130,214,0.1); }
.impt-scroll { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); font-size: 10px; letter-spacing: 0.3em; color: rgba(255,255,255,0.3); z-index: 10; animation: impt-bounce 2s ease-in-out infinite; }

@keyframes impt-fade-up { to { opacity: 1; transform: translateY(0); } }
@keyframes impt-pulse { 0%,100%{ opacity: 1; box-shadow: 0 0 0 0 rgba(91,130,214,0.5); } 50%{ opacity: 0.6; box-shadow: 0 0 0 6px rgba(91,130,214,0); } }
@keyframes impt-bounce { 0%,100%{ transform: translateX(-50%) translateY(0); } 50%{ transform: translateX(-50%) translateY(6px); } }

/* STATS */
.impt-stats { position: relative; z-index: 5; background: rgba(6,10,20,0.7); border-top: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04); }
.impt-stats-inner { margin: 0 auto; max-width: 1280px; display: grid; grid-template-columns: 1fr; }
@media (min-width: 640px){ .impt-stats-inner{ grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px){ .impt-stats-inner{ grid-template-columns: repeat(4,1fr); } }
.impt-stat { text-align: center; padding: 36px 24px; border-right: 1px solid transparent; }
@media (min-width: 1024px){ .impt-stat{ border-right-color: rgba(255,255,255,0.05); } .impt-stat:last-child{ border-right-color: transparent; } }
.impt-stat-value { font-size: 44px; font-weight: 800; color: var(--blue-light); line-height: 1; margin-bottom: 12px; }
.impt-stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.55); white-space: pre-line; line-height: 1.5; }
.impt-stat-sub { display: block; margin-top: 4px; font-size: 10px; color: rgba(255,255,255,0.35); }

/* SECTIONS */
.impt-section { padding: 100px 24px; position: relative; }
@media (min-width: 768px){ .impt-section{ padding: 120px 40px; } }
.impt-section-inner { margin: 0 auto; max-width: 1280px; }
.impt-section-head { text-align: center; max-width: 760px; margin: 0 auto 64px; }
.impt-sec-eyebrow { display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; color: var(--blue-light); margin-bottom: 18px; }
.impt-sec-title { margin: 0; font-size: clamp(32px, 5vw, 54px); font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; white-space: pre-line;color: #fff; }
.impt-sec-title-accent { color: var(--blue-light); }
.impt-sec-sub { margin: 22px auto 0; max-width: 580px; font-size: 16px; line-height: 1.6; color: rgba(255,255,255,0.6); }

/* reveal on scroll */
.impt-reveal { opacity: 0; transform: translateY(28px); transition: opacity 700ms ease, transform 700ms ease; }
.impt-reveal.is-visible { opacity: 1; transform: translateY(0); }

/* SERVICES */
.impt-services-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
@media (min-width: 700px){ .impt-services-grid{ grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px){ .impt-services-grid{ grid-template-columns: repeat(3,1fr); } }
.impt-card { position: relative; padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); transition: border-color 250ms ease, transform 250ms ease, background 250ms ease; overflow: hidden; }
.impt-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at top left, rgba(46,75,143,0.16), transparent 60%); opacity: 0; transition: opacity 300ms ease; pointer-events: none; }
.impt-card:hover { border-color: rgba(91,130,214,0.4); background: rgba(255,255,255,0.04); transform: translateY(-3px); }
.impt-card:hover::before { opacity: 1; }
.impt-card-icon { width: 32px; height: 32px; color: var(--blue-light); margin-bottom: 24px; }
.impt-card-title { margin: 0 0 12px; font-size: 18px; font-weight: 600; letter-spacing: -0.01em; }
.impt-card-body { margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.6); }
.impt-card-tags { margin-top: 24px; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; color: var(--blue-light); }

/* WHY */
.impt-why-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
@media (min-width: 768px){ .impt-why-grid{ grid-template-columns: repeat(2,1fr); } }
.impt-why-card { position: relative; padding: 36px; border-radius: 16px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); overflow: hidden; transition: border-color 250ms ease, background 250ms ease; }
.impt-why-card:hover { border-color: rgba(91,130,214,0.3); background: rgba(255,255,255,0.04); }
.impt-why-num { position: absolute; top: 22px; right: 28px; font-size: 72px; font-weight: 800; line-height: 1; color: rgba(91,130,214,0.35); letter-spacing: -0.04em; pointer-events: none; transition: transform 300ms ease, color 300ms ease; }
.impt-why-card:hover .impt-why-num { transform: translateX(-6px); color: rgba(91,130,214,0.18); }
.impt-why-title { margin: 0 0 14px; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
.impt-why-body { margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.6); max-width: 90%; }

/* ABOUT */
.impt-about-line { height: 1px; background: linear-gradient(90deg, var(--blue-light), transparent); transform: scaleX(0); transform-origin: left; transition: transform 1200ms ease; margin-bottom: 56px; }
.impt-about-line.is-visible { transform: scaleX(1); }
.impt-about-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
@media (min-width: 768px){ .impt-about-grid{ grid-template-columns: repeat(3,1fr); } }
.impt-about-item { padding: 0 28px; border-left: 1px solid transparent; }
@media (min-width: 768px){ .impt-about-item{ border-left-color: rgba(255,255,255,0.06); } .impt-about-item:first-child{ border-left-color: transparent; padding-left: 0; } .impt-about-item:last-child{ padding-right: 0; } }
.impt-about-item + .impt-about-item { margin-top: 40px; }
@media (min-width: 768px){ .impt-about-item + .impt-about-item{ margin-top: 0; } }
.impt-about-icon { width: 28px; height: 28px; color: var(--blue-light); margin-bottom: 20px; }
.impt-about-title { margin: 0 0 12px; font-size: 18px; font-weight: 600; letter-spacing: -0.01em; }
.impt-about-body { margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.6); }
.impt-about-grid-v { display: flex; flex-direction: column; gap: 28px; }
.impt-about-item-v .impt-about-title { margin: 0 0 8px; font-size: 18px; font-weight: 600; }
.impt-about-item-v .impt-about-body { margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.6); }
.impt-about-item-v { padding-left: 16px; border-left: 2px solid rgba(91,130,214,0.3); }
@media (min-width: 900px) { .impt-about-layout { grid-template-columns: 1fr 1fr !important; } }

/* STACK */
.impt-stack { position: relative; overflow: hidden; padding: 14px 0; mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%); -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%); }
.impt-stack-track { display: flex; gap: 70px; width: max-content; animation: impt-marquee 40s linear infinite; }
.impt-stack-track.reverse { animation-direction: reverse; animation-duration: 85s; }
@media (prefers-reduced-motion: reduce){ .impt-stack-track{ animation-duration: 140s; } }
.impt-stack-item { display: inline-flex; align-items: center; gap: 12px; padding: 14px 22px; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; background: rgba(255,255,255,0.02); white-space: nowrap; flex-shrink: 0; transition: border-color 250ms ease, background 250ms ease, transform 250ms ease; }
.impt-stack-item:hover { border-color: rgba(255,255,255,0.18); background: rgba(255,255,255,0.05); transform: scale(1.05); }
.impt-stack-logo { width: 22px; height: 22px; flex-shrink: 0; }
.impt-stack-name { font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.8); }
@keyframes impt-marquee { from{ transform: translateX(0); } to{ transform: translateX(-50%); } }

/* CONTACT */
.impt-contact-grid { display: grid; grid-template-columns: 1fr; gap: 56px; align-items: start; }
@media (min-width: 900px){ .impt-contact-grid{ grid-template-columns: 1fr 1.2fr; gap: 80px; } }
.impt-contact-info { text-align: left; }
.impt-contact-info .impt-sec-title { text-align: left; }
.impt-contact-meta { margin-top: 40px; display: flex; flex-direction: column; gap: 24px; }
.impt-contact-meta-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
.impt-contact-meta-value { font-size: 16px; font-weight: 500; color: #fff; }
.impt-form { padding: 36px; border-radius: 20px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); }
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))){ .impt-form{ -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); } }
.impt-form-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
@media (min-width: 600px){ .impt-form-row{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; } }
.impt-field { display: flex; flex-direction: column; gap: 8px; }
.impt-label { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.85); }
.impt-label-req { color: var(--blue-light); }
.impt-input, .impt-textarea, .impt-select { width: 100%; padding: 14px 16px; font-size: 14px; color: #fff; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; font-family: inherit; transition: border-color 200ms ease, background 200ms ease; outline: none; }
.impt-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
.impt-input::placeholder, .impt-textarea::placeholder { color: rgba(255,255,255,0.35); }
.impt-input:focus, .impt-textarea:focus, .impt-select:focus { border-color: rgba(91,130,214,0.6); background: rgba(0,0,0,0.4); }
.impt-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235B82D6' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 44px; }
.impt-select option { background: #0a0d18; color: #fff; }
.impt-submit { width: 100%; padding: 16px 24px; font-size: 15px; font-weight: 600; color: #fff; background: linear-gradient(135deg, var(--blue) 0%, var(--blue-bright) 100%); border: none; border-radius: 10px; cursor: pointer; transition: box-shadow 200ms ease, transform 200ms ease; }
.impt-submit:hover { box-shadow: 0 0 28px rgba(46,75,143,0.5); transform: translateY(-1px); }
.impt-form-success { margin-top: 16px; padding: 14px 18px; font-size: 14px; color: #34d399; background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.25); border-radius: 10px; }

/* FOOTER */
.impt-footer { border-top: 1px solid rgba(255,255,255,0.06); padding: 56px 24px 32px; background: rgba(6,10,20,0.6); }
.impt-footer-inner { margin: 0 auto; max-width: 1280px; display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 768px){ .impt-footer-inner{ grid-template-columns: 1.5fr 1fr 1fr; } }
.impt-footer-tag { margin-top: 14px; font-size: 14px; color: rgba(255,255,255,0.5); }
.impt-footer-col-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(255,255,255,0.4); margin-bottom: 18px; }
.impt-footer-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.impt-footer-link { font-size: 14px; color: rgba(255,255,255,0.7); transition: color 200ms ease; }
.impt-footer-link:hover { color: var(--blue-light); }
.impt-footer-bottom { margin: 40px auto 0; max-width: 1280px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; font-size: 13px; color: rgba(255,255,255,0.35); }
`;

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function ServiceIcon({ name }) {
  return (
    <svg
      className="impt-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.code}
    </svg>
  );
}
function AboutIcon({ name }) {
  return (
    <svg
      className="impt-about-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.target}
    </svg>
  );
}
function TechLogo({ tech }) {
  return (
    <svg
      className="impt-stack-logo"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={tech.path} fill={tech.color} />
    </svg>
  );
}

// Reveal-on-scroll wrapper
function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`impt-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Count-up number
function CountUp({ target, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const reduce = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;
          if (reduce) {
            setVal(target);
            obs.disconnect();
            return;
          }
          const start = performance.now();
          const dur = 1500;
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// Particle network canvas
function HeroCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let w, h, dpr, particles, raf;
    const mouse = { x: -9999, y: -9999 };
    const COUNT = 70;
    const LINK_DIST = 130;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = mouse.x - p.x,
            dy = mouse.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 200 && d > 0) {
            p.x += (dx / d) * 0.4;
            p.y += (dy / d) * 0.4;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(91,130,214,0.85)';
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(91,130,214,${
              0.18 * (1 - dist / LINK_DIST)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    init();
    step();
    window.addEventListener('resize', () => {
      resize();
      init();
    });
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return (
    <canvas ref={canvasRef} className="impt-hero-canvas" aria-hidden="true" />
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN
// ═════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [lang, setLang] = useState('es');
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const t = COPY[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Periodic glitch on the accent word
  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduce) return;
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 320);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', company: '', email: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const titleWords = t.titleParts[0].trim().split(' ');
  const techLoop = [...TECH, ...TECH];

  return (
    <div className="impt-root">
      <style>{STYLES}</style>

      {/* HERO */}
      <div className="impt-hero-wrap">
        <div className="impt-fallback-bg" aria-hidden="true" />
        <div className="impt-hero-glow" aria-hidden="true" />
        <video
       className="impt-hero-canvas"
       autoPlay
       loop
       muted
       playsInline
       src="/impulsatec-fondo.mp4"
       ref={(el) => { if (el) el.playbackRate = 0.5; }}
       />
        <div className="impt-corner tl" aria-hidden="true" />
        <div className="impt-corner tr" aria-hidden="true" />
        <div className="impt-corner bl" aria-hidden="true" />
        <div className="impt-corner br" aria-hidden="true" />

        <header className={'impt-header' + (scrolled ? ' is-scrolled' : '')}>
          <div className="impt-header-inner">
            <a href="#" aria-label="ImpulsaTec">
              <Logo height={80} />
            </a>
            <nav className="impt-nav">
              {t.nav.map((item) => (
                <a key={item.href} href={item.href} className="impt-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="impt-right">
              <button
                type="button"
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="impt-lang"
                aria-label="Toggle language"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <a href="#contacto" className="impt-cta-pill">
                {t.cta}
              </a>
            </div>
          </div>
        </header>

        <section className="impt-hero">
          <div className="impt-hero-inner">
            <div className="impt-eyebrow">
              <span className="impt-eyebrow-dot" aria-hidden="true" />
              {t.eyebrow}
            </div>
            <h1 className="impt-title">
              {titleWords.map((word, i) => (
                <span
                  key={i}
                  className="word"
                  style={{
                    animationDelay: `${300 + i * 150}ms`,
                    marginRight: '0.25em',
                  }}
                >
                  {word}
                </span>
              ))}
              <span
                className={'word impt-title-accent' + (glitch ? ' glitch' : '')}
                data-text={t.titleParts[1]}
                style={{
                  animationDelay: `${300 + titleWords.length * 150}ms`,
                  marginRight: '0.25em',
                }}
              >
                {t.titleParts[1]}
              </span>
              <span
                className="word"
                style={{
                  animationDelay: `${300 + (titleWords.length + 1) * 150}ms`,
                }}
              >
                {t.titleParts[2].trim()}
              </span>
            </h1>
            <p className="impt-sub">{t.sub}</p>
            <div className="impt-cta-row">
              <a href="#servicios" className="impt-btn impt-btn-primary">
                {t.primary}
              </a>
              <a href="#contacto" className="impt-btn impt-btn-secondary">
                {t.secondary}
              </a>
            </div>
          </div>
        </section>

        <div className="impt-scroll" aria-hidden="true">
          {t.scroll}
        </div>
      </div>

      {/* STATS */}
      <section className="impt-stats">
        <div className="impt-stats-inner">
          {t.stats.map((s, i) => (
            <div key={i} className="impt-stat">
              <div className="impt-stat-value">
                {s.count ? (
                  <CountUp target={s.value} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </div>
              <div className="impt-stat-label">
                {s.label}
                {s.sub && <span className="impt-stat-sub">{s.sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="impt-section" id="servicios">
        <div className="impt-section-inner">
          <Reveal className="impt-section-head">
            <div className="impt-sec-eyebrow">{t.servicesEyebrow}</div>
            <h2 className="impt-sec-title">
              {t.servicesTitleParts[0]}
              <span className="impt-sec-title-accent">
                {t.servicesTitleParts[1]}
              </span>
            </h2>
            <p className="impt-sec-sub">{t.servicesSub}</p>
          </Reveal>
          <div className="impt-services-grid">
            {t.services.map((s, i) => (
              <Reveal
                as="article"
                key={i}
                className="impt-card"
                delay={(i % 3) * 80}
              >
                <ServiceIcon name={s.icon} />
                <h3 className="impt-card-title">{s.title}</h3>
                <p className="impt-card-body">{s.body}</p>
                <div className="impt-card-tags">{s.tags}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="impt-section" id="porque">
        <div className="impt-section-inner">
          <Reveal className="impt-section-head">
            <div className="impt-sec-eyebrow">{t.whyEyebrow}</div>
            <h2 className="impt-sec-title">
              {t.whyTitleParts[0]}
              <span className="impt-sec-title-accent">
                {t.whyTitleParts[1]}
              </span>
            </h2>
          </Reveal>
          <Reveal style={{ maxWidth: 420, margin: "0 auto 56px" }}>
            <img
              src="/foto-equipo.jpg"
              alt="Tecnología e innovación"
              style={{ width: "auto", maxWidth: "100%", maxHeight: 520, objectFit: "contain", borderRadius: 20, border: "1px solid rgba(91,130,214,0.2)", display: "block", margin: "0 auto" }}
            />
          </Reveal>
          <div className="impt-why-grid">
            {t.why.map((w, i) => (
              <Reveal
                as="article"
                key={i}
                className="impt-why-card"
                delay={(i % 2) * 100}
              >
                <div className="impt-why-num" aria-hidden="true">
                  {w.n}
                </div>
                <h3 className="impt-why-title">{w.title}</h3>
                <p className="impt-why-body">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="impt-section" id="nosotros">
        <div className="impt-section-inner">
          <Reveal className="impt-section-head">
            <div className="impt-sec-eyebrow">{t.aboutEyebrow}</div>
            <h2 className="impt-sec-title">{t.aboutTitleParts[0]}<span className="impt-sec-title-accent">{t.aboutTitleParts[1]}</span></h2>
          </Reveal>
          <AboutLine />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="impt-about-layout">
            <Reveal>
              <img
                src="/foto-ia.jpg"
                alt="Inteligencia artificial y estrategia"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 340,
                  maxHeight: 480,
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: 20,
                  border: "1px solid rgba(91,130,214,0.2)",
                  display: "block",
                }}
              />
            </Reveal>
            <div className="impt-about-grid-v">
              {t.about.map((a, i) => (
                <Reveal key={i} className="impt-about-item-v" delay={i * 120}>
                  <AboutIcon name={a.icon} />
                  <h3 className="impt-about-title">{a.title}</h3>
                  <p className="impt-about-body">{a.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* STACK */}
      <section
        className="impt-section"
        id="stack"
        style={{ paddingBottom: 60 }}
      >
        <div className="impt-section-inner">
          <Reveal className="impt-section-head" style={{ marginBottom: 48 }}>
            <div className="impt-sec-eyebrow">{t.stackEyebrow}</div>
            <h2 className="impt-sec-title">
              {t.stackTitleParts[0]}
              <span className="impt-sec-title-accent">
                {t.stackTitleParts[1]}
              </span>
            </h2>
          </Reveal>
        </div>
        <div className="impt-stack">
          <div className="impt-stack-track">
            {techLoop.map((tech, i) => (
              <div key={i} className="impt-stack-item">
                <TechLogo tech={tech} />
                <span className="impt-stack-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="impt-stack" style={{ marginTop: 24 }}>
          <div className="impt-stack-track reverse">
            {techLoop
              .slice()
              .reverse()
              .map((tech, i) => (
                <div key={i} className="impt-stack-item">
                  <TechLogo tech={tech} />
                  <span className="impt-stack-name">{tech.name}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="impt-section" id="contacto">
        <div className="impt-section-inner">
          <div className="impt-contact-grid">
            <Reveal className="impt-contact-info">
              <div className="impt-sec-eyebrow">{t.contactEyebrow}</div>
              <h2 className="impt-sec-title">
                {t.contactTitleParts[0]}
                <span className="impt-sec-title-accent">
                  {t.contactTitleParts[1]}
                </span>
              </h2>
              <p
                className="impt-sec-sub"
                style={{ margin: '22px 0 0', textAlign: 'left' }}
              >
                {t.contactSub}
              </p>
              <div className="impt-contact-meta">
                <div>
                  <div className="impt-contact-meta-label">
                    {t.contactEmailLabel}
                  </div>
                  <div className="impt-contact-meta-value">
                    {t.contactEmail}
                  </div>
                </div>
                <div>
                  <div className="impt-contact-meta-label">
                    {t.contactResponseLabel}
                  </div>
                  <div className="impt-contact-meta-value">
                    {t.contactResponse}
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal
              as="form"
              className="impt-form"
              delay={100}
              onSubmit={handleSubmit}
            >
              <div className="impt-form-grid">
                <div className="impt-form-row">
                  <div className="impt-field">
                    <label className="impt-label">
                      {t.form.name} <span className="impt-label-req">*</span>
                    </label>
                    <input
                      className="impt-input"
                      type="text"
                      required
                      placeholder={t.form.namePh}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="impt-field">
                    <label className="impt-label">{t.form.company}</label>
                    <input
                      className="impt-input"
                      type="text"
                      placeholder={t.form.companyPh}
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="impt-field">
                  <label className="impt-label">
                    {t.form.email} <span className="impt-label-req">*</span>
                  </label>
                  <input
                    className="impt-input"
                    type="email"
                    required
                    placeholder={t.form.emailPh}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div className="impt-field">
                  <label className="impt-label">{t.form.service}</label>
                  <select
                    className="impt-select"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    <option value="">{t.form.servicePh}</option>
                    {t.services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="impt-field">
                  <label className="impt-label">
                    {t.form.message} <span className="impt-label-req">*</span>
                  </label>
                  <textarea
                    className="impt-textarea"
                    required
                    placeholder={t.form.messagePh}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={5}
                  />
                </div>
                <button type="submit" className="impt-submit">
                  {t.form.submit}
                </button>
                {submitted && (
                  <div className="impt-form-success">{t.form.success}</div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="impt-footer">
        <div className="impt-footer-inner">
          <div>
            <div>
           <Logo height={56} />
           <p className="impt-footer-tag">{t.footer.tagline}</p>
           <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
           <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5B82D6"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
           <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z"/></svg>
           </a>
           <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5B82D6"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
           <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
           </a>
           <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5B82D6"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
           <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z"/></svg>
           </a>
           <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5B82D6"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
           <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.86.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5.6 20.92a6.34 6.34 0 0 0 10.49-4.82V9.01a8.16 8.16 0 0 0 4.77 1.53V7.1a4.85 4.85 0 0 1-1.27-.41z"/></svg>
    </a>
  </div>
</div>
          </div>
          <div>
            <div className="impt-footer-col-label">
              {t.footer.sectionsLabel}
            </div>
            <ul className="impt-footer-list">
              {t.footer.sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="impt-footer-link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="impt-footer-col-label">
              {t.footer.servicesLabel}
            </div>
            <ul className="impt-footer-list">
              {t.footer.servicesLinks.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="impt-footer-link">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="impt-footer-bottom">{t.footer.copyright}</div>
      </footer>
    </div>
  );
}

// Animated about-divider line
function AboutLine() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={'impt-about-line' + (visible ? ' is-visible' : '')}
      aria-hidden="true"
    />
  );
}
