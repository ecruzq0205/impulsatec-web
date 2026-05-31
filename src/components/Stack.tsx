import { TECH } from '../data/tech';
import type { Copy } from '../data/copy';
import Reveal from './Reveal';
import TechLogo from './TechLogo';

type StackProps = {
  t: Copy;
};

export default function Stack({ t }: StackProps) {
  const techLoop = [...TECH, ...TECH];

  return (
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
      <div className="impt-stack">
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
  );
}
