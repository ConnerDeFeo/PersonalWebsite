import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface Props {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Wraps children in an element that fades + slides into view the first time it
 * enters the viewport. Uses a shared-pattern IntersectionObserver per instance.
 */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
