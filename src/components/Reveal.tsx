import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

type RevealProps<T extends ElementType> = {
  children: React.ReactNode;
  delay?: number;
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export default function Reveal<T extends ElementType = 'div'>({
  children,
  delay = 0,
  as,
  className = '',
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`impt-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
