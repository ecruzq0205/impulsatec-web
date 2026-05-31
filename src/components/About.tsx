import type { Copy } from '../data/copy';
import AboutIcon from './AboutIcon';
import AboutLine from './AboutLine';
import ImageCarousel from './ImageCarousel';
import Reveal from './Reveal';

type AboutProps = {
  t: Copy;
};

const ABOUT_IMAGES = [
  {
    src: '/foto-ia.jpg',
    alt: 'Inteligencia artificial y estrategia aplicada a negocios',
  },
  {
    src: '/foto_ia.jpg',
    alt: 'Estrategia de inteligencia artificial para procesos empresariales',
  },
  {
    src: '/foto_ia3.jpg',
    alt: 'Automatizacion e inteligencia artificial aplicada a negocio',
  },
];

export default function About({ t }: AboutProps) {
  return (
    <section className="impt-section" id="nosotros">
      <div className="impt-section-inner">
        <Reveal className="impt-section-head">
          <div className="impt-sec-eyebrow">{t.aboutEyebrow}</div>
          <h2 className="impt-sec-title">
            {t.aboutTitleParts[0]}
            <span className="impt-sec-title-accent">
              {t.aboutTitleParts[1]}
            </span>
          </h2>
        </Reveal>
        <AboutLine />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
            alignItems: 'center',
          }}
          className="impt-about-layout"
        >
          <Reveal className="impt-about-media">
            <ImageCarousel
              images={ABOUT_IMAGES}
              className="impt-about-carousel"
              imageClassName="impt-about-img"
              label="Galeria sobre inteligencia artificial y estrategia"
            />
            <div className="impt-about-media-badge" aria-hidden="true">
              <span>IA</span>
              <strong>Strategy layer</strong>
            </div>
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
  );
}
