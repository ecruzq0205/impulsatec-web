import { useEffect, useState } from 'react';
import type { Copy, Locale } from '../data/copy';
import Header from './Header';

type HeroProps = {
  t: Copy;
  lang: Locale;
  onToggleLang: () => void;
};

export default function Hero({ t, lang, onToggleLang }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "/impulsatec-fondo_2.mp4",
    "/impulsatec-fondo_3.mp4", // Add your second video
    "/impulsatec-fondo_5.mp4", // Add your third video
    "/impulsatec-fondo_4.mp4"  // Add your fourth video
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

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

  const titleWords = t.titleParts[0].trim().split(' ');

  return (
    <div className="impt-hero-wrap">
      <div className="impt-fallback-bg" aria-hidden="true" />
      <div className="impt-hero-glow" aria-hidden="true" />
      <video
        key={currentVideoIndex}
        className="impt-hero-canvas"
        autoPlay
        loop
        muted
        playsInline
        src={videos[currentVideoIndex]}
        ref={(el) => {
          if (el) el.playbackRate = 1;
        }}
      />
      <div className="impt-corner tl" aria-hidden="true" />
      <div className="impt-corner tr" aria-hidden="true" />
      <div className="impt-corner bl" aria-hidden="true" />
      <div className="impt-corner br" aria-hidden="true" />

      <Header
        t={t}
        lang={lang}
        scrolled={scrolled}
        onToggleLang={onToggleLang}
      />

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
          <div className="impt-hero-proof" aria-label="Puntos clave">
            {t.heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <div className="impt-cta-row">
            <a href="#servicios" className="impt-btn impt-btn-primary">
              <span>{t.primary}</span>
              {/* <span className="impt-btn-arrow" aria-hidden="true">
                -&gt;
              </span> */}
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
  );
}
