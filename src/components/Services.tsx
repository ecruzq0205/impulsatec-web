import type { Copy } from '../data/copy';
import Reveal from './Reveal';
import ServiceIcon from './ServiceIcon';

type ServicesProps = {
  t: Copy;
};

export default function Services({ t }: ServicesProps) {
  return (
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
              <div className="impt-card-top">
                <ServiceIcon name={s.icon} />
                <span className="impt-card-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="impt-card-title">{s.title}</h3>
              <p className="impt-card-body">{s.body}</p>
              <div className="impt-card-tags" aria-label={s.tags}>
                {s.tags.split(' · ').map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
