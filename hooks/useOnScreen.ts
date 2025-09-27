import React, { useState, useEffect } from 'react';

export function useOnScreen(ref: React.RefObject<HTMLElement>, rootMargin = '0px'): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (ref.current) {
             observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if(ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

// A wrapper component to apply the fade-in effect
// FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
// The original JSX was causing parsing errors because this is not a .tsx file.
export const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, '-100px');

  return React.createElement(
    'div',
    {
      ref: ref,
      className: `${className || ''} fade-in-section ${onScreen ? 'is-visible' : ''}`,
    },
    children
  );
};
