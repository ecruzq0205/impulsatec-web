import { C } from '../constants/brand';

export const GLOBAL_STYLES = `
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
.impt-root a:focus-visible,
.impt-root button:focus-visible,
.impt-root input:focus-visible,
.impt-root textarea:focus-visible,
.impt-root select:focus-visible {
  outline: 3px solid rgba(147,190,255,0.95);
  outline-offset: 3px;
}

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
// .impt-corner { position: absolute; width: 22px; height: 22px; border: 1.5px solid rgba(91,130,214,0.5); pointer-events: none; z-index: 8; }
.impt-corner.tl { top: 88px; left: 24px; border-right: none; border-bottom: none; }
.impt-corner.tr { top: 88px; right: 24px; border-left: none; border-bottom: none; }
.impt-corner.bl { bottom: 24px; left: 24px; border-right: none; border-top: none; }
.impt-corner.br { bottom: 24px; right: 24px; border-left: none; border-top: none; }
@media (max-width: 640px){ .impt-corner{display:none;} }

/* HEADER */
.impt-header {
  position: fixed; left: 0; right: 0; top: 0; z-index: 50;
  padding: 12px 14px 0;
  // background: linear-gradient(180deg, rgba(6,10,20,0.72), rgba(6,10,20,0));
  border-bottom: 1px solid transparent;
  transition: padding 240ms cubic-bezier(0.23,1,0.32,1), background-color 240ms ease, border-color 240ms ease;
}
.impt-header.is-scrolled { padding-top: 8px; background-color: rgba(6,10,20,0.2); border-bottom-color: transparent; }
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
  .impt-header { -webkit-backdrop-filter: none; backdrop-filter: none; }
  .impt-header.is-scrolled { -webkit-backdrop-filter: none; backdrop-filter: none; }
}
.impt-header-inner {
  margin: 0 auto; max-width: 1000px; min-height: 70px; display: flex; align-items: center; justify-content: space-between;
  padding: 8px 24px 8px 24px; gap: 16px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.045)), rgba(6,10,20,0.58);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 20px 70px rgba(0,0,0,0.25);
}
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
  .impt-header-inner { -webkit-backdrop-filter: blur(22px) saturate(155%); backdrop-filter: blur(22px) saturate(155%); }
}
@media (min-width: 768px){ .impt-header-inner{ padding: 8px 14px 8px 24px; } }
.impt-nav { display: none; align-items: center; gap: 6px; padding: 5px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); }
@media (min-width: 900px){ .impt-nav{ display: flex; } }
.impt-nav-link {
  min-height: 38px; display: inline-flex; align-items: center; padding: 0 14px; border-radius: 999px;
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.68);
  transition: color 180ms ease, background 180ms ease, transform 180ms ease;
}
.impt-nav-link:hover { color: #fff; background: rgba(255,255,255,0.08); transform: translateY(-1px); }
.impt-right { display: flex; align-items: center; gap: 12px; }
.impt-lang {
  display: none; min-width: 44px; min-height: 44px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.72); background: rgba(255,255,255,0.055); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px; cursor: pointer; padding: 0 12px; transition: color 180ms ease, background 180ms ease, transform 180ms ease;
}
@media (min-width: 640px){ .impt-lang{ display: inline-block; } }
.impt-lang:hover { color: #fff; background: rgba(255,255,255,0.1); transform: translateY(-1px); }
.impt-cta-pill {
  min-height: 46px; display: inline-flex; align-items: center; gap: 10px; padding: 0 18px 0 20px; font-size: 14px; font-weight: 800;
  color: #fff; border-radius: 9999px; border: 1px solid rgba(147,190,255,0.42);
  background: linear-gradient(135deg, rgba(91,130,214,0.94) 0%, rgba(46,75,143,0.98) 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 35px rgba(46,75,143,0.32);
  transition: box-shadow 180ms ease, transform 180ms ease, filter 180ms ease;
}
.impt-cta-pill:hover { box-shadow: inset 0 1px 0 rgba(255,255,255,0.24), 0 0 28px rgba(91,130,214,0.48); transform: translateY(-1px); filter: brightness(1.05); }
.impt-cta-arrow { display: inline-flex; opacity: 0.78; transition: transform 180ms ease; }
.impt-cta-pill:hover .impt-cta-arrow { transform: translateX(2px); }

/* HERO CONTENT */
.impt-hero { position: relative; z-index: 10; min-height: 100vh; min-height: 100dvh; display: flex; align-items: center; justify-content: center; padding: 120px 24px 120px; text-align: center; }
.impt-hero-inner { width: 100%; max-width: 980px; }
.impt-eyebrow {
  display: inline-flex; align-items: center; gap: 10px; max-width: min(100%, 760px); padding: 10px 14px;
  border-radius: 999px; border: 1px solid rgba(147,190,255,0.2); background: rgba(6,10,20,0.36);
  font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em; color: #f1f4fa; margin-bottom: 28px; opacity: 0; animation: impt-fade-up 700ms ease 100ms forwards;
}
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
  .impt-eyebrow { -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); }
}
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
.impt-sub { margin: 28px auto 0; max-width: 720px; font-size: 16px; line-height: 1.65; color: rgb(255, 255, 255); opacity: 0; animation: impt-fade-up 700ms ease 900ms forwards; }
@media (min-width: 768px){ .impt-sub{ font-size: 17px; } }
.impt-hero-proof {
  margin: 24px auto 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
  opacity: 0; animation: impt-fade-up 700ms ease 1000ms forwards;
}
.impt-hero-proof span {
  display: inline-flex; align-items: center; min-height: 34px; padding: 7px 12px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.055);
  color: rgb(255, 255, 255); font-size: 12px; font-weight: 700;
}
.impt-cta-row { margin-top: 44px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; opacity: 0; animation: impt-fade-up 700ms ease 1100ms forwards; }
.impt-btn { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 0 26px; font-size: 15px; font-weight: 800; border-radius: 9999px; cursor: pointer; transition: color 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease, transform 180ms ease, filter 180ms ease; }
.impt-btn-primary { background: linear-gradient(135deg, rgba(91,130,214,0.98) 0%, rgba(46,75,143,0.98) 100%); color: #fff; border: 1px solid rgba(147,190,255,0.46); box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 18px 46px rgba(46,75,143,0.34); }
.impt-btn-primary:hover { box-shadow: inset 0 1px 0 rgba(255,255,255,0.24), 0 0 34px rgba(91,130,214,0.5); transform: translateY(-2px); filter: brightness(1.04); }
.impt-btn-secondary { color: #fff; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.075); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08); }
.impt-btn-secondary:hover { border-color: rgba(147,190,255,0.42); background: rgba(91,130,214,0.14); transform: translateY(-2px); }
.impt-btn-arrow { opacity: 0.8; transition: transform 180ms ease; }
.impt-btn:hover .impt-btn-arrow { transform: translateX(2px); }
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
.impt-section { padding: 64px 24px; position: relative; isolation: isolate; }
.impt-section::before {
  content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background:
    linear-gradient(90deg, rgba(91,130,214,0.06) 1px, transparent 1px),
    linear-gradient(180deg, rgba(91,130,214,0.045) 1px, transparent 1px);
  background-size: 96px 96px; opacity: 0.18;
  mask-image: linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
}
@media (min-width: 768px){ .impt-section{ padding: 80px 40px; } }
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
.impt-services-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
@media (min-width: 700px){ .impt-services-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); } }
@media (min-width: 1080px){ .impt-services-grid{ grid-template-columns: repeat(3, minmax(0,1fr)); } }
.impt-card {
  position: relative; min-height: 315px; padding: 28px; border-radius: 8px;
  background: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.022));
  border: 1px solid rgba(154,185,255,0.14);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 50px rgba(0,0,0,0.18);
  transition: border-color 250ms ease, transform 250ms ease, background 250ms ease, box-shadow 250ms ease;
  overflow: hidden;
}
.impt-card::before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(91,130,214,0.22), transparent 42%);
  opacity: 0; transition: opacity 300ms ease; pointer-events: none;
}
.impt-card::after {
  content: ""; position: absolute; left: 28px; right: 28px; bottom: 0; height: 2px;
  background: linear-gradient(90deg, var(--blue-light), rgba(91,130,214,0));
  transform: scaleX(0); transform-origin: left; transition: transform 300ms ease;
}
.impt-card:hover {
  border-color: rgba(147,190,255,0.42);
  background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.03));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 26px 64px rgba(0,0,0,0.26);
  transform: translateY(-4px);
}
.impt-card:hover::before { opacity: 1; }
.impt-card:hover::after { transform: scaleX(1); }
.impt-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 28px; }
.impt-card-icon-shell {
  display: inline-flex; width: 52px; height: 52px; align-items: center; justify-content: center;
  color: #d7e6ff; border: 1px solid rgba(147,190,255,0.24); border-radius: 8px;
  background: rgba(91,130,214,0.16); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
.impt-card-icon { width: 26px; height: 26px; }
.impt-card-index { font-size: 12px; font-weight: 700; letter-spacing: 0.16em; color: rgba(255,255,255,0.35); }
.impt-card-title { margin: 0 0 12px; font-size: 20px; font-weight: 700; letter-spacing: 0; color: rgba(255,255,255,0.96); }
.impt-card-body { margin: 0; font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.68); }
.impt-card-tags { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 8px; }
.impt-card-tags span {
  display: inline-flex; align-items: center; min-height: 28px; padding: 6px 9px;
  border-radius: 999px; border: 1px solid rgba(147,190,255,0.16);
  background: rgba(6,10,20,0.34); color: #b9d2ff; font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
}

/* WHY */
.impt-carousel {
  position: relative; width: min(100%, 1257px); aspect-ratio: 760 / 570; height: auto;
}
.impt-carousel-frame { position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 8px; }
.impt-carousel .impt-carousel-img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  opacity: 0; transform: scale(1.012);
  transition: opacity 520ms cubic-bezier(0.23, 1, 0.32, 1), transform 900ms cubic-bezier(0.23, 1, 0.32, 1);
}
.impt-carousel .impt-carousel-img.is-active { opacity: 1; transform: scale(1); z-index: 1; }
.impt-carousel-dots {
  position: absolute; z-index: 3; left: 18px; bottom: 18px;
  display: flex; align-items: center; gap: 8px;
}
.impt-carousel-dot {
  width: 44px; height: 44px; padding: 0; border: 0; border-radius: 999px;
  background: transparent; cursor: pointer; position: relative;
}
.impt-carousel-dot::before {
  content: ""; position: absolute; left: 10px; right: 10px; top: 21px; height: 2px;
  border-radius: 999px; background: rgba(255,255,255,0.42);
  transition: background 180ms ease, transform 180ms ease;
}
.impt-carousel-dot.is-active::before { background: #d7e6ff; transform: scaleX(1.35); }
.impt-carousel-dot:hover::before { background: rgba(255,255,255,0.78); }
.impt-why-layout { display: grid; grid-template-columns: 1fr; gap: 34px; align-items: center; margin-top: 8px; }
@media (min-width: 940px){ .impt-why-layout{ grid-template-columns: minmax(300px, 457px) 1fr; gap: 42px; align-items: center; } }
.impt-why-visual { position: relative; width: min(100%, 457px); justify-self: center; }
.impt-why-visual::before {
  content: ""; position: absolute; inset: -1px; border-radius: 8px;
  background: linear-gradient(145deg, rgba(147,190,255,0.46), rgba(46,75,143,0.05) 56%, rgba(255,255,255,0.08));
  pointer-events: none;
}
.impt-why-visual::after {
  content: ""; position: absolute; inset: auto -18px -20px 18px; height: 46%;
  background: radial-gradient(circle at center, rgba(46,75,143,0.3), transparent 70%);
  filter: blur(28px); z-index: 0; pointer-events: none;
}
.impt-why-img {
  position: relative; z-index: 1; width: 100%; height: 100%;
  object-fit: cover; object-position: center; border-radius: 8px;
  border: 1px solid rgba(147,190,255,0.2); display: block; filter: saturate(1.05) contrast(1.04);
}
.impt-why-carousel { z-index: 1; }
.impt-why-carousel .impt-carousel-frame { border: 1px solid rgba(147,190,255,0.2); }
.impt-why-carousel .impt-why-img { min-height: 0; max-height: none; border: 0; }
.impt-why-carousel .impt-carousel-dots { left: auto; right: 18px; bottom: auto; top: 18px; }
.impt-why-caption {
  position: absolute; z-index: 2; left: 18px; right: 18px; bottom: 18px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12);
  background: rgba(6,10,20,0.68); color: #fff;
}
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
  .impt-why-caption { -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); }
}
.impt-why-caption span { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #b9d2ff; }
.impt-why-caption strong { font-size: 13px; font-weight: 700; }
.impt-why-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
@media (min-width: 640px){ .impt-why-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); } }
.impt-why-card {
  position: relative; padding: 24px; border-radius: 8px;
  background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.075);
  overflow: hidden; transition: border-color 250ms ease, background 250ms ease, transform 250ms ease;
}
.impt-why-card::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: linear-gradient(180deg, var(--blue-light), rgba(91,130,214,0));
  opacity: 0.55; transition: opacity 250ms ease;
}
.impt-why-card:hover { border-color: rgba(147,190,255,0.3); background: rgba(255,255,255,0.055); transform: translateY(-2px); }
.impt-why-card:hover::before { opacity: 1; }
.impt-why-num {
  display: inline-flex; min-width: 42px; min-height: 28px; align-items: center; justify-content: center;
  margin-bottom: 18px; border-radius: 999px; border: 1px solid rgba(147,190,255,0.2);
  background: rgba(91,130,214,0.12); font-size: 11px; font-weight: 800; letter-spacing: 0.12em; color: #d7e6ff;
}
.impt-why-title { margin: 0 0 10px; font-size: 19px; font-weight: 700; letter-spacing: 0; }
.impt-why-body { margin: 0; font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.68); }

/* ABOUT */
.impt-about-line { height: 1px; background: linear-gradient(90deg, transparent, rgba(147,190,255,0.95), transparent); transform: scaleX(0); transform-origin: center; transition: transform 1200ms ease; margin-bottom: 56px; }
.impt-about-line.is-visible { transform: scaleX(1); }
.impt-about-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
@media (min-width: 768px){ .impt-about-grid{ grid-template-columns: repeat(3,1fr); } }
.impt-about-item { padding: 0 28px; border-left: 1px solid transparent; }
@media (min-width: 768px){ .impt-about-item{ border-left-color: rgba(255,255,255,0.06); } .impt-about-item:first-child{ border-left-color: transparent; padding-left: 0; } .impt-about-item:last-child{ padding-right: 0; } }
.impt-about-item + .impt-about-item { margin-top: 40px; }
@media (min-width: 768px){ .impt-about-item + .impt-about-item{ margin-top: 0; } }
.impt-about-icon { width: 24px; height: 24px; color: #d7e6ff; }
.impt-about-title { margin: 0 0 12px; font-size: 18px; font-weight: 600; letter-spacing: -0.01em; }
.impt-about-body { margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.6); }
.impt-about-media { position: relative; width: min(100%, 560px); justify-self: center; }
.impt-about-media::before {
  content: ""; position: absolute; inset: -12px 22px 18px -12px; border: 1px solid rgba(147,190,255,0.16);
  border-radius: 8px; pointer-events: none;
}
.impt-about-img {
  position: relative; width: 100%; height: 100%;
  object-fit: cover; object-position: center; border-radius: 8px;
  border: 1px solid rgba(147,190,255,0.22); display: block;
  box-shadow: 0 24px 70px rgba(0,0,0,0.28);
}
.impt-about-carousel .impt-carousel-frame { border: 1px solid rgba(147,190,255,0.22); box-shadow: 0 24px 70px rgba(0,0,0,0.28); }
.impt-about-carousel { width: min(100%, 560px); }
.impt-about-carousel .impt-about-img { min-height: 0; max-height: none; border: 0; box-shadow: none; }
.impt-about-media-badge {
  position: absolute; right: 18px; bottom: 18px; display: inline-flex; align-items: center; gap: 12px;
  padding: 12px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.14);
  background: rgba(6,10,20,0.72); color: #fff;
}
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
  .impt-about-media-badge { -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); }
}
.impt-about-media-badge span {
  display: inline-flex; width: 34px; height: 34px; align-items: center; justify-content: center;
  border-radius: 8px; background: rgba(91,130,214,0.24); color: #d7e6ff; font-size: 12px; font-weight: 800;
}
.impt-about-media-badge strong { font-size: 13px; font-weight: 700; }
.impt-about-grid-v { display: flex; flex-direction: column; gap: 14px; }
.impt-about-icon-shell {
  display: inline-flex; width: 48px; height: 48px; align-items: center; justify-content: center;
  border-radius: 8px; border: 1px solid rgba(147,190,255,0.2); background: rgba(91,130,214,0.14);
  flex: 0 0 auto;
}
.impt-about-item-v {
  display: grid; grid-template-columns: auto 1fr; column-gap: 18px; row-gap: 4px;
  padding: 22px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.075);
  background: rgba(255,255,255,0.032); transition: border-color 250ms ease, background 250ms ease, transform 250ms ease;
}
.impt-about-item-v:hover { border-color: rgba(147,190,255,0.28); background: rgba(255,255,255,0.052); transform: translateX(3px); }
.impt-about-item-v .impt-about-icon-shell { grid-row: span 2; }
.impt-about-item-v .impt-about-title { margin: 0; font-size: 19px; font-weight: 700; letter-spacing: 0; }
.impt-about-item-v .impt-about-body { margin: 0; font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.68); }
@media (min-width: 900px) { .impt-about-layout { grid-template-columns: minmax(420px, 560px) 1fr !important; } }
@media (max-width: 520px) {
  .impt-about-item-v { grid-template-columns: 1fr; }
  .impt-about-item-v .impt-about-icon-shell { grid-row: auto; margin-bottom: 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .impt-carousel .impt-carousel-img { transition: opacity 1ms linear, transform 1ms linear; transform: none; }
}

/* STACK */
#stack .impt-stack { margin-top: 0; }
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
.impt-contact-grid { display: grid; grid-template-columns: 1fr; gap: 42px; align-items: start; }
@media (min-width: 940px){ .impt-contact-grid{ grid-template-columns: minmax(280px, 0.82fr) 1.18fr; gap: 64px; } }
.impt-contact-info { text-align: left; }
.impt-contact-info .impt-sec-title { text-align: left; }
.impt-contact-meta { margin-top: 34px; display: grid; grid-template-columns: 1fr; gap: 12px; }
.impt-contact-meta > div {
  padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.075);
  background: rgba(255,255,255,0.032);
}
.impt-contact-meta-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(185,210,255,0.72); margin-bottom: 8px; }
.impt-contact-meta-value { font-size: 16px; font-weight: 500; color: #fff; }
.impt-contact-note {
  margin-top: 14px; padding: 16px 18px; border-left: 3px solid rgba(147,190,255,0.7);
  background: rgba(91,130,214,0.1); color: rgba(255,255,255,0.72); font-size: 14px; line-height: 1.55;
}
.impt-form {
  position: relative; padding: 30px; border-radius: 8px;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.026));
  border: 1px solid rgba(147,190,255,0.16);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 70px rgba(0,0,0,0.22);
}
.impt-form::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 2px;
  background: linear-gradient(90deg, rgba(147,190,255,0), rgba(147,190,255,0.9), rgba(147,190,255,0));
}
@supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))){ .impt-form{ -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); } }
.impt-form-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
@media (min-width: 600px){ .impt-form-row{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; } }
.impt-field { display: flex; flex-direction: column; gap: 8px; }
.impt-label { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.88); }
.impt-label-req { color: var(--blue-light); }
.impt-input, .impt-textarea, .impt-select {
  width: 100%; padding: 14px 16px; min-height: 48px; font-size: 14px; color: #fff;
  background: rgba(4,8,17,0.62); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
  font-family: inherit; transition: border-color 200ms ease, background 200ms ease, box-shadow 200ms ease; outline: none;
}
.impt-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
.impt-input::placeholder, .impt-textarea::placeholder { color: rgba(255,255,255,0.35); }
.impt-input:focus, .impt-textarea:focus, .impt-select:focus { border-color: rgba(147,190,255,0.64); background: rgba(4,8,17,0.82); box-shadow: 0 0 0 4px rgba(91,130,214,0.14); }
.impt-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235B82D6' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 44px; }
.impt-select option { background: #0a0d18; color: #fff; }
.impt-submit { width: 100%; min-height: 52px; padding: 16px 24px; font-size: 15px; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--blue) 0%, var(--blue-bright) 100%); border: none; border-radius: 8px; cursor: pointer; transition: box-shadow 200ms ease, transform 200ms ease, filter 200ms ease; }
.impt-submit:hover { box-shadow: 0 0 28px rgba(46,75,143,0.5); transform: translateY(-1px); }
.impt-submit:active { transform: translateY(0); filter: brightness(0.96); }
.impt-form-success { margin-top: 2px; padding: 14px 18px; font-size: 14px; color: #9ff0c6; background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.28); border-radius: 8px; }
@media (max-width: 520px){ .impt-form{ padding: 22px; } }

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
