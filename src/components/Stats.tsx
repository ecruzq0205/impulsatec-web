import type { Copy } from '../data/copy';
import CountUp from './CountUp';

type StatsProps = {
  t: Copy;
};

export default function Stats({ t }: StatsProps) {
  return (
    <section className="impt-stats">
      <div className="impt-stats-inner">
        {t.stats.map((s, i) => (
          <div key={i} className="impt-stat">
            <div className="impt-stat-value">
              {s.count ? (
                <CountUp target={s.value as number} suffix={s.suffix} />
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
  );
}
