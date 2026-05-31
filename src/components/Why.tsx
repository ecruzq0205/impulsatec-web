import type { Copy } from '../data/copy';
import ImageCarousel from './ImageCarousel';
import Reveal from './Reveal';

type WhyProps = {
  t: Copy;
};

const WHY_IMAGES = [
  {
    src: '/foto-equipo.jpg',
    alt: 'Equipo de tecnologia e innovacion trabajando en soluciones',
  },
  {
    src: '/foto_ia2.jpg',
    alt: 'Equipo trabajando con soluciones de inteligencia artificial',
  },
  {
    src: '/foto_ia4.png',
    alt: 'Infraestructura tecnologica e innovacion para empresas',
  },
];

export default function Why({ t }: WhyProps) {
  return (
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
        <div className="impt-why-layout">
          <Reveal className="impt-why-visual">
            <ImageCarousel
              images={WHY_IMAGES}
              className="impt-why-carousel"
              imageClassName="impt-why-img"
              label="Galeria sobre tecnologia e innovacion"
            />
            <div className="impt-why-caption" aria-hidden="true">
              <span>Operacion</span>
              <strong>Segura y Medible</strong>
            </div>
          </Reveal>
          <div className="impt-why-grid">
            {t.why.map((w, i) => (
              <Reveal
                as="article"
                key={i}
                className="impt-why-card"
                delay={i * 80}
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
      </div>
    </section>
  );
}
