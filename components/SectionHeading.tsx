import type { ReactNode } from 'react';
import AnimatedCard from './AnimatedCard';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'emerald' | 'clay';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'emerald',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <AnimatedCard
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${tone === 'clay' ? 'eyebrow-clay' : ''}`}>
          <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-ink/70 text-pretty sm:text-lg">
          {intro}
        </p>
      ) : null}
    </AnimatedCard>
  );
}
