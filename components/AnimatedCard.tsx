'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type AnimatedCardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Apply hover-lift styling. */
  lift?: boolean;
};

/**
 * Wraps content in a scroll-triggered reveal. Uses IntersectionObserver so the
 * animation only fires once, when the element enters the viewport. Falls back to
 * visible immediately if observers are unavailable or motion is reduced (handled
 * in CSS).
 */
export default function AnimatedCard({
  children,
  as,
  className = '',
  delay = 0,
  lift = false,
}: AnimatedCardProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`reveal-init ${visible ? 'is-visible' : ''} ${lift ? 'lift' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
