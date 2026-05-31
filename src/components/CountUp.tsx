import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  target: number;
  suffix?: string;
};

export default function CountUp({ target, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const reduce = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;
          if (reduce) {
            setVal(target);
            obs.disconnect();
            return;
          }
          const start = performance.now();
          const dur = 1500;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
