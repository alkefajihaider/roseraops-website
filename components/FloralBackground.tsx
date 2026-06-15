// Decorative, non-interactive background layer. aria-hidden so it is skipped by
// assistive tech. All motion is CSS-driven and disabled under reduced-motion.

const PETALS = [
  { left: '8%', delay: '0s', duration: '20s', scale: 0.75, color: 'var(--p-rose)' },
  { left: '31%', delay: '11s', duration: '22s', scale: 0.7, color: 'var(--p-sage)' },
  { left: '57%', delay: '8s', duration: '21s', scale: 0.7, color: 'var(--p-rose)' },
  { left: '81%', delay: '4s', duration: '23s', scale: 0.8, color: 'var(--p-gold)' },
];

function Petal({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 1C6 5 2 9 2 14a9 9 0 0 0 18 0c0-5-4-9-9-13Z"
        fill={color}
        opacity="0.55"
      />
      <path d="M11 3C8 7 6 10 6 14" stroke="rgba(16,32,43,0.18)" strokeWidth="0.6" />
    </svg>
  );
}

export default function FloralBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={
        {
          '--p-rose': '#D8A7A7',
          '--p-sage': '#AFC7B5',
          '--p-gold': '#D9B56D',
          '--p-clay': '#B86F6F',
        } as React.CSSProperties
      }
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-ivory" />

      {/* Soft drifting gradient blooms */}
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(175,199,181,0.45),transparent_62%)] blur-3xl animate-drift" />
      <div
        className="absolute -right-48 top-24 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(216,167,167,0.42),transparent_62%)] blur-3xl animate-drift"
        style={{ animationDelay: '6s' }}
      />
      <div
        className="absolute left-1/3 top-[58%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(217,181,109,0.26),transparent_64%)] blur-3xl animate-drift"
        style={{ animationDelay: '11s' }}
      />
      <div
        className="absolute -bottom-40 right-1/4 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(76,166,168,0.18),transparent_64%)] blur-3xl animate-drift"
        style={{ animationDelay: '3s' }}
      />

      {/* Faint vine line-art, top-right */}
      <svg
        className="absolute right-0 top-0 h-[34rem] w-[34rem] opacity-[0.16]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M400 40C300 60 250 120 240 200c-8 70-60 110-140 120"
          stroke="#2F6F5E"
          strokeWidth="1.4"
        />
        <path d="M240 200c30-20 70-18 96 6" stroke="#2F6F5E" strokeWidth="1.2" />
        <path d="M200 320c-22-28-18-66 8-92" stroke="#B86F6F" strokeWidth="1.2" />
        <circle cx="240" cy="200" r="3.5" fill="#D9B56D" />
        <circle cx="200" cy="320" r="3.5" fill="#B86F6F" />
      </svg>

      {/* Falling petals */}
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: p.left,
            transform: `scale(${p.scale})`,
            animation: `petal ${p.duration} linear ${p.delay} infinite`,
          }}
        >
          <Petal color={p.color} />
        </span>
      ))}
    </div>
  );
}
