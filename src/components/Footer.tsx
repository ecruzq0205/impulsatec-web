import type { Copy } from '../data/copy';
import Logo from './Logo';

type FooterProps = {
  t: Copy;
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="impt-footer">
      <div className="impt-footer-inner">
        <div>
          <div>
            <Logo height={56} />
            <p className="impt-footer-tag">{t.footer.tagline}</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#5B82D6')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                }
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#5B82D6')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                }
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#5B82D6')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                }
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#5B82D6')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                }
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.86.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5.6 20.92a6.34 6.34 0 0 0 10.49-4.82V9.01a8.16 8.16 0 0 0 4.77 1.53V7.1a4.85 4.85 0 0 1-1.27-.41z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="impt-footer-col-label">{t.footer.sectionsLabel}</div>
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
          <div className="impt-footer-col-label">{t.footer.servicesLabel}</div>
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
  );
}
