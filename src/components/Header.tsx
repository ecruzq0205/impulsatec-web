import type { Copy, Locale } from '../data/copy';
import Logo from './Logo';

type HeaderProps = {
  t: Copy;
  lang: Locale;
  scrolled: boolean;
  onToggleLang: () => void;
};

export default function Header({ t, lang, scrolled, onToggleLang }: HeaderProps) {
  return (
    <header className={'impt-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="impt-header-inner" >
        <a href="#" aria-label="ImpulsaTec" style={{ marginLeft: '3%' }}>
          <Logo height={70} />
        </a>
        <nav className="impt-nav" aria-label="Navegación principal" style={{ marginLeft: '3%' }}>
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="impt-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="impt-right" style={{ marginRight: '3%' }}>
          <button
            type="button"
            onClick={onToggleLang}
            className="impt-lang"
            aria-label="Toggle language"
          >
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <a href="#contacto" className="impt-cta-pill">
            <span>{t.cta}</span>
            {/* <span className="impt-cta-arrow" aria-hidden="true">
              -&gt;
            </span> */}
          </a>
        </div>
      </div>
    </header>
  );
}
