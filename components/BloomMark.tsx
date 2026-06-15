// Parametric rose. `openness` 0 → tight bud, 1 → full bloom. Used as a faint,
// non-interactive section accent so the page visually blooms top to bottom.
// Pure SVG, deterministic (no randomness) — safe for static export / SSR.

type Props = {
  openness?: number;
  className?: string;
};

export default function BloomMark({ openness = 0.5, className = '' }: Props) {
  const o = Math.max(0, Math.min(1, openness));

  const layers = [
    { count: 8, base: 0, rx: 6 + 5 * o, ry: 14 + 12 * o, dist: 5 + 24 * o, fill: '#D8A7A7', op: 0.3 + 0.3 * o },
    { count: 6, base: 24, rx: 5 + 4 * o, ry: 11 + 9 * o, dist: 3 + 15 * o, fill: '#E3B6B6', op: 0.36 + 0.3 * o },
    { count: 5, base: 12, rx: 4 + 3 * o, ry: 8 + 6 * o, dist: 1 + 8 * o, fill: '#EFCFCF', op: 0.42 + 0.26 * o },
  ];

  return (
    <svg viewBox="-60 -60 120 120" className={className} fill="none" aria-hidden>
      {layers.map((L, li) =>
        Array.from({ length: L.count }).map((_, i) => {
          const angle = L.base + i * (360 / L.count);
          return (
            <ellipse
              key={`${li}-${i}`}
              cx={0}
              cy={-L.dist}
              rx={L.rx}
              ry={L.ry}
              fill={L.fill}
              fillOpacity={L.op}
              stroke="#B86F6F"
              strokeOpacity={0.12}
              strokeWidth={0.6}
              transform={`rotate(${angle})`}
            />
          );
        })
      )}
      <circle r={5 - 2 * o} fill="#B86F6F" fillOpacity={0.6} />
      <circle r={2.4} fill="#D9B56D" />
    </svg>
  );
}
