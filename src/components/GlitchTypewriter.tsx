import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  /** ms before typing begins */
  startDelay?: number;
  className?: string;
}

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#@%$';

/**
 * Terminal-style typing reveal with intermittent glitch characters that
 * resolve to the correct letter, plus a lingering blinking cyan block cursor.
 */
const GlitchTypewriter = ({ text, startDelay = 400, className = '' }: Props) => {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;

    const typeNext = () => {
      if (i >= text.length) {
        setDone(true);
        return;
      }
      const settled = text.slice(0, i);
      const nextChar = text[i];

      // For non-space chars, flicker through a few glitch glyphs first
      if (nextChar !== ' ') {
        let glitches = 2 + Math.floor(Math.random() * 2);
        const glitchStep = () => {
          if (glitches <= 0) {
            setOutput(settled + nextChar);
            i += 1;
            timers.current.push(setTimeout(typeNext, 55 + Math.random() * 70));
            return;
          }
          const g = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          setOutput(settled + g);
          glitches -= 1;
          timers.current.push(setTimeout(glitchStep, 28));
        };
        glitchStep();
      } else {
        setOutput(settled + ' ');
        i += 1;
        timers.current.push(setTimeout(typeNext, 60));
      }
    };

    timers.current.push(setTimeout(typeNext, startDelay));

    const captured = timers.current;
    return () => captured.forEach(clearTimeout);
  }, [text, startDelay]);

  return (
    <span className={className}>
      <span className="glow-text">{output}</span>
      <span
        className="inline-block align-baseline ml-1"
        style={{
          width: '0.55ch',
          height: '0.92em',
          background: 'var(--orange)',
          boxShadow: '0 0 16px rgba(255,85,0,0.7)',
          transform: 'translateY(0.08em)',
          animation: done ? 'cursor-blink 1.05s steps(1) infinite' : 'none',
          opacity: done ? undefined : 1,
        }}
        aria-hidden="true"
      />
    </span>
  );
};

export default GlitchTypewriter;
