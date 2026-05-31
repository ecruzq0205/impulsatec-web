import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Stack from './components/Stack';
import Stats from './components/Stats';
import Why from './components/Why';
import { COPY, type Locale } from './data/copy';
import { GLOBAL_STYLES } from './styles/globalStyles';

export default function App() {
  const [lang, setLang] = useState<Locale>('es');
  const t = COPY[lang];

  return (
    <div className="impt-root">
      <style>{GLOBAL_STYLES}</style>

      <Hero
        t={t}
        lang={lang}
        onToggleLang={() => setLang(lang === 'es' ? 'en' : 'es')}
      />
      <Stats t={t} />
      <Services t={t} />
      <Why t={t} />
      <About t={t} />
      <Stack t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
